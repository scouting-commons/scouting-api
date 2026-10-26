import type { SdkConfig } from "./lib/config.js";
import {
	createClient,
	createConfig,
} from "./generated/api.scouting.org/client/index.js";
import { Sdk } from "./generated/api.scouting.org/index.js";

export * from "./generated/api.scouting.org/index.js";
export type { SdkConfig };

export const createSdk = (config: SdkConfig = {}) =>
	new Sdk({
		client: createClient(
			createConfig({
				baseUrl: config.baseUrl ?? "https://api.scouting.org",
				auth: config.token,
				// Some list endpoints ignore query filters without this header. See
				// the quirks in the spec's info.description.
				headers: { "Cache-Control": "no-cache" },
			}),
		),
	});
