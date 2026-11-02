import { McpServer } from "@modelcontextprotocol/server";
import { registerTools } from "./tools/register.ts";
import { serveStdio } from "@modelcontextprotocol/server/stdio";

function createServer(): McpServer {
	const server = new McpServer({
		name: "Scouting API",
		version: "0",
	});

	return registerTools(server);
}

void serveStdio(() => createServer());
console.error("mcp server running on stdio");
