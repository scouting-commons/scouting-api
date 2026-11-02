import type { McpServer } from "@modelcontextprotocol/server";
import { operations } from "./generated/index.ts";

export function registerTools(server: McpServer) {
	for (const operation of operations) {
		server.registerTool(
			operation.name,
			{
				title: operation.title,
				description: operation.description,
				annotations: {
					readOnlyHint: operation.readOnly,
				},
			},
			() => {
				return {
					content: [],
				};
			},
		);
	}

	return server;
}
