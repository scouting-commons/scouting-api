import { McpServer } from "@modelcontextprotocol/server";
import type { ScoutingClient } from "scouting-api";
import pkg from "../package.json" with { type: "json" };
import { registerTools } from "./tools/register.ts";

// The MCP server every entry shares. Each entry signs in its own way and
// passes in the client, and whether it signed in.
export function createServer(
	scouting: ScoutingClient,
	signedIn: boolean,
): McpServer {
	return registerTools(
		new McpServer(
			{ name: pkg.name, version: pkg.version },
			{
				// instructions: "todo"
			},
		),
		scouting,
		signedIn,
	);
}
