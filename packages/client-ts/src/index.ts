import { createSdk as createApiSdk } from "./lib/apis/api.scouting.org.js";
import { createSdk as createAuthSdk } from "./lib/apis/auth.scouting.org.js";
import { createSdk as createScoutConnectSdk } from "./lib/apis/scoutconnect-api.scouting.org.js";

import type { ScoutingClientConfig } from "./lib/types.js";
import { createSession } from "./lib/session.js";

export * as api from "./lib/apis/api.scouting.org.js";
export * as auth from "./lib/apis/auth.scouting.org.js";
export * as scoutConnect from "./lib/apis/scoutconnect-api.scouting.org.js";

export type { ScoutingClientConfig };
export type ScoutingClient = ReturnType<typeof createScoutingClient>;

/** initialize an api client */
export const createScoutingClient = (config: ScoutingClientConfig) => {
	const { auth, baseUrl, fetch } = config;
	const token =
		auth === "none"
			? undefined
			: "token" in auth
				? auth.token
				: // A separate SDK without a token signs in, so signing in never
					// waits on itself
					createSession(createAuthSdk({ baseUrl: baseUrl?.auth, fetch }), auth);

	return {
		api: createApiSdk({ baseUrl: baseUrl?.api, token, fetch }),
		auth: createAuthSdk({ baseUrl: baseUrl?.auth, token, fetch }),
		scoutConnect: createScoutConnectSdk({
			baseUrl: baseUrl?.scoutConnect,
			token,
			fetch,
		}),
	};
};
