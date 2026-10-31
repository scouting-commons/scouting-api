import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";

function createServer(): McpServer {
	const server = new McpServer({
		name: "Scouting API",
		version: "0",
	});

	return server;
}

void serveStdio(createServer);
console.error("mcp server running on stdio");
