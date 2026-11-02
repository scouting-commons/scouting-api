#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/server";
import { registerTools } from "./tools/register.ts";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import {
	createScoutingClient,
	type ScoutingClient,
	type ScoutingClientConfig,
} from "scouting-api";

function createServer(scouting: ScoutingClient): McpServer {
	const server = new McpServer({
		name: "Scouting API",
		version: "0",
	});

	return registerTools(server, scouting);
}

// Signs in with a my.scouting.org login when both variables are set, and
// calls only public endpoints when neither is
function authFromEnv(): ScoutingClientConfig["auth"] {
	const { SCOUTING_USERNAME: username, SCOUTING_PASSWORD: password } =
		process.env;
	if (!username && !password) return "none";
	if (!username || !password) {
		throw new Error(
			"Set both SCOUTING_USERNAME and SCOUTING_PASSWORD, or neither",
		);
	}
	return { username, password };
}

const scouting = createScoutingClient({ auth: authFromEnv() });

void serveStdio(() => createServer(scouting));
console.error("mcp server running on stdio");
