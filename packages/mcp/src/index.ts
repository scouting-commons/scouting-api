import { McpServer } from "@modelcontextprotocol/server";
import { registerTools } from "./tools/register.ts";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import { createScoutingClient, type ScoutingClient } from "scouting-api";

function createServer(scouting: ScoutingClient): McpServer {
	const server = new McpServer({
		name: "Scouting API",
		version: "0",
	});

	return registerTools(server, scouting);
}

const scouting = createScoutingClient({ auth: "none" });

void serveStdio(() => createServer(scouting));
console.error("mcp server running on stdio");
