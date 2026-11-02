import {
	$,
	type DefinePlugin,
	definePluginConfig,
	type Plugin,
} from "@hey-api/openapi-ts";

// Plugin.Name only accepts built-in plugin names, so set `name` directly
type Config = { name: "mcp-tools" } & Plugin.Hooks & Plugin.Exports;
type McpToolsPlugin = DefinePlugin<Config, Config>;

// Writes a table of every operation, which the server turns into tools
const handler: McpToolsPlugin["Handler"] = ({ plugin }) => {
	const operations: Array<Record<string, unknown>> = [];

	plugin.forEach("operation", (event) => {
		const { operation } = event;
		operations.push({
			name: operation.id,
			title: operation.summary,
			description: operation.description,
			readOnly: operation.method === "get",
		});
	});

	plugin.node(
		$.const(plugin.symbol("operations"))
			.export()
			.assign($.fromValue(operations)),
	);
};

export const defineMcpToolsPlugin = definePluginConfig<McpToolsPlugin["Types"]>(
	{
		config: {},
		handler,
		name: "mcp-tools",
	},
);
