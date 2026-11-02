import type ts from "typescript";

import {
	$,
	type DefinePlugin,
	definePluginConfig,
	type Plugin,
	toCase,
	type TsDsl,
} from "@hey-api/openapi-ts";

// Plugin.Name only accepts built-in plugin names, so set `name` directly
type Config = { name: "mcp-tools" } & Plugin.Hooks &
	Plugin.Exports & {
		/** The client property for this spec's API, such as `scouting.api` */
		api: string;
	};
type McpToolsPlugin = DefinePlugin<Config, Config>;

// The request parts the zod plugin writes a schema for, merged into one input
const inputLayers = ["path", "query", "body"] as const;

// Writes a table of every operation, which the server turns into tools
const handler: McpToolsPlugin["Handler"] = ({ plugin }) => {
	const defineTool = plugin.symbol("defineTool", { external: "../define.ts" });
	const operations = $.array();

	plugin.forEach("operation", ({ operation }) => {
		const [first, ...rest] = inputLayers.flatMap((layer) => {
			const symbol = plugin.querySymbol({
				artifact: "zod",
				category: "schema",
				resource: "operation",
				resourceId: operation.id,
				role: `request-${layer}`,
			});
			return symbol ? [symbol] : [];
		});

		// first.extend(rest[0].shape).extend(rest[1].shape)...
		const input =
			first &&
			rest.reduce<TsDsl<ts.Expression>>(
				(schema, symbol) =>
					$(schema).attr("extend").call($(symbol).attr("shape")),
				$(first),
			);

		const output = plugin.querySymbol({
			artifact: "zod",
			category: "schema",
			resource: "operation",
			resourceId: operation.id,
			role: "responses",
		});

		// The client groups methods by the operation's first tag, in camelCase
		const [tag = ""] = operation.tags ?? [];
		const method = $("scouting")
			.attr(plugin.config.api)
			.attr(toCase(tag, "camelCase"))
			.attr(operation.id);

		// (scouting, args) => scouting.api.<tag>.<operationId>(args)
		const call = $.func((f) =>
			input
				? f
						.param("scouting")
						.param("args")
						.do($.return(method.call($("args"))))
				: f.param("scouting").do($.return(method.call())),
		);

		operations.element(
			$(defineTool).call(
				$.object()
					.prop("name", $.literal(operation.id))
					.prop("title", $.fromValue(operation.summary))
					.prop("description", $.fromValue(operation.description))
					.prop("readOnly", $.literal(operation.method === "get"))
					.prop("input", input ?? null)
					.prop("output", output ? $(output) : null)
					.prop("call", call),
			),
		);
	});

	plugin.node($.const(plugin.symbol("operations")).export().assign(operations));
};

export const defineMcpToolsPlugin = definePluginConfig<McpToolsPlugin["Types"]>(
	{
		config: { api: "api" },
		dependencies: ["zod"],
		handler,
		name: "mcp-tools",
	},
);
