#!/usr/bin/env node

import { serveStdio } from "@modelcontextprotocol/server/stdio";
import { createScoutingClient, type ScoutingClientConfig } from "scouting-api";
import { createServer } from "./server.ts";

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
