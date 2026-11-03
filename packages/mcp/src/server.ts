import { McpServer } from "@modelcontextprotocol/server";
import type { ScoutingClient } from "scouting-api";
import pkg from "../package.json" with { type: "json" };
import { registerTools } from "./tools/register.ts";

// The MCP server every entry shares. Each entry signs in its own way and
// passes in the client.
export function createServer(scouting: ScoutingClient): McpServer {
	return registerTools(
		new McpServer(
			{ name: pkg.name, version: pkg.version },
			{
				// instructions: "todo"
			},
		),
		scouting,
	);
}
