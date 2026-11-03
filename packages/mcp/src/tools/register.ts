import type { McpServer } from "@modelcontextprotocol/server";
import type { ScoutingClient } from "scouting-api";
import { operations as apiOperations } from "./generated/api.scouting.org/index.ts";
import { operations as scoutConnectOperations } from "./generated/scoutconnect-api.scouting.org/index.ts";

const operations = [...apiOperations, ...scoutConnectOperations];

// Without a sign-in, leaves out the tools that need one
export function registerTools(
	server: McpServer,
	scouting: ScoutingClient,
	signedIn: boolean,
) {
	for (const operation of operations) {
		if (operation.requiresAuth && !signedIn) continue;
		server.registerTool(
			operation.name,
			{
				title: operation.title,
				description: operation.description,
				inputSchema: operation.input,
				outputSchema: operation.output,
				annotations: {
					readOnlyHint: operation.readOnly ?? undefined,
				},
			},
			async (args) => {
				const { data, error, response } = await operation.call(scouting, args);
				// The SDK turns a thrown error into an isError result. There's no
				// response when the request never reached the API.
				if (error) {
					throw new Error(JSON.stringify({ status: response?.status, error }));
				}

				return {
					content: [{ type: "text", text: JSON.stringify(data) }],
					structuredContent: data,
				};
			},
		);
	}

	return server;
}
