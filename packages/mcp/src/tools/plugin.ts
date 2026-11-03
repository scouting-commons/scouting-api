import {
	$,
	type DefinePlugin,
	definePluginConfig,
	type Plugin,
	toCase,
} from "@hey-api/openapi-ts";

// Plugin.Name only accepts built-in plugin names, so set `name` directly
type Options = {
	/** The client property for this spec's API, such as `scouting.api` */
	api: string;
};
type UserConfig = { name: "mcp-tools" } & Plugin.Hooks &
	Plugin.UserExports &
	Partial<Options>;
type Config = { name: "mcp-tools" } & Plugin.Hooks & Plugin.Exports & Options;
type McpToolsPlugin = DefinePlugin<UserConfig, Config>;

// Writes a table of every operation, which the server turns into tools
const handler: McpToolsPlugin["Handler"] = ({ plugin }) => {
	const defineTool = plugin.symbol("defineTool", {
		external: "../../define.ts",
	});
	const z = plugin.symbol("z", { external: "zod", importKind: "namespace" });
	const operations = $.array();

	plugin.forEach("operation", ({ operation }) => {
		const zodSchema = (layer: "path" | "query" | "body") =>
			plugin.querySymbol({
				artifact: "zod",
				category: "schema",
				resource: "operation",
				resourceId: operation.id,
				role: `request-${layer}`,
			});

		// The tool's input matches the client's flat parameters: path and query
		// fields as they are, and a body under its schema's name unless it's an
		// inline object, whose fields are spread too.
		// z.object({ ...zPath.shape, ...zQuery.shape, organizationSearch: zBody })
		const fields = $.object();
		for (const layer of ["path", "query", "body"] as const) {
			const symbol = zodSchema(layer);
			if (!symbol) continue;
			const body = operation.body?.schema;
			if (layer !== "body" || (!body?.$ref && body?.properties)) {
				fields.spread($(symbol).attr("shape"));
			} else {
				const name = body?.$ref ? body.$ref.split("/").at(-1) : undefined;
				fields.prop(name ? toCase(name, "camelCase") : "body", $(symbol));
			}
		}
		const input = fields.hasProps()
			? $(z).attr("object").call(fields)
			: undefined;

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

		// The IR drops the `{}` that marks sign-in as optional, so read the raw
		// spec. Sign-in is required when every security option names a scheme.
		const { spec } = plugin.context;
		const security: Array<object> =
			spec.paths[operation.path][operation.method].security ??
			spec.security ??
			[];
		const requiresAuth =
			security.length > 0 &&
			security.every((option) => Object.keys(option).length > 0);

		operations.element(
			$(defineTool).call(
				$.object()
					.prop("name", $.literal(operation.id))
					.prop("title", $.fromValue(operation.summary))
					.prop("description", $.fromValue(operation.description))
					// null (unknown) for POST, which this API uses for searches too
					.prop(
						"readOnly",
						operation.method === "post"
							? $.fromValue(null)
							: $.literal(operation.method === "get"),
					)
					.prop("requiresAuth", $.literal(requiresAuth))
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
