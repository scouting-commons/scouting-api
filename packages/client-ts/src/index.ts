import { createSdk as createApiSdk } from "./api.scouting.org.js";
import { createSdk as createAuthSdk } from "./auth.scouting.org.js";
import { createSdk as createScoutConnectSdk } from "./scoutconnect-api.scouting.org.js";

import type { ScoutingClientConfig } from "./lib/types.js";
import { createSession } from "./lib/session.js";

export * as api from "./api.scouting.org.js";
export * as auth from "./auth.scouting.org.js";
export * as scoutConnect from "./scoutconnect-api.scouting.org.js";

export type { ScoutingClientConfig };
export type ScoutingClient = ReturnType<typeof createScoutingClient>;

/** initialize an api client */
export const createScoutingClient = (config: ScoutingClientConfig) => {
	const { auth, baseUrl } = config;
	const token =
		auth === "none"
			? undefined
			: "token" in auth
				? auth.token
				: // A separate SDK without a token signs in, so signing in never
					// waits on itself
					createSession(createAuthSdk({ baseUrl: baseUrl?.auth }), auth);

	return {
		api: createApiSdk({ baseUrl: baseUrl?.api, token }),
		auth: createAuthSdk({ baseUrl: baseUrl?.auth, token }),
		scoutConnect: createScoutConnectSdk({
			baseUrl: baseUrl?.scoutConnect,
			token,
		}),
	};
};
