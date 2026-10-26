import type { SdkConfig } from "./lib/config.js";
import {
	createClient,
	createConfig,
} from "./generated/scoutconnect-api.scouting.org/client/index.js";
import { Sdk } from "./generated/scoutconnect-api.scouting.org/index.js";

export * from "./generated/scoutconnect-api.scouting.org/index.js";
export type { SdkConfig };

export const createSdk = (config: SdkConfig = {}) =>
	new Sdk({
		client: createClient(
			createConfig({
				baseUrl: config.baseUrl ?? "https://scoutconnect-api.scouting.org",
				auth: config.token,
				// The API rejects the default User-Agent of Node's fetch. See the
				// quirks in the spec's info.description.
				headers: { "User-Agent": "scouting-api" },
			}),
		),
	});
