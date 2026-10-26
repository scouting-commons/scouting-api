import { createSdk as createApiSdk } from "./api.scouting.org.js";
import { createSdk as createAuthSdk } from "./auth.scouting.org.js";
import { createSdk as createScoutConnectSdk } from "./scoutconnect-api.scouting.org.js";

import type { ScoutingClientConfig } from "./lib/config.js";

export * as api from "./api.scouting.org.js";
export * as auth from "./auth.scouting.org.js";
export * as scoutConnect from "./scoutconnect-api.scouting.org.js";

export type { ScoutingClientConfig };
export type ScoutingClient = ReturnType<typeof createScoutingClient>;

/** initialize an api client */
export const createScoutingClient = (config: ScoutingClientConfig) => {
	const token = config.auth === "anonymous" ? undefined : config.auth.token;

	return {
		api: createApiSdk({ baseUrl: config.baseUrl?.api, token }),
		auth: createAuthSdk({ baseUrl: config.baseUrl?.auth, token }),
		scoutConnect: createScoutConnectSdk({
			baseUrl: config.baseUrl?.scoutConnect,
			token,
		}),
	};
};
