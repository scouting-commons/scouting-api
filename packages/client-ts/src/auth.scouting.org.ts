import type { SdkConfig } from "./lib/types.js";
import {
	createClient,
	createConfig,
} from "./generated/auth.scouting.org/client/index.js";
import { Sdk } from "./generated/auth.scouting.org/index.js";

export * from "./generated/auth.scouting.org/index.js";
export type { SdkConfig };

// The API rejects requests without a version in Accept, and each endpoint
// answers on only one version. See the quirks in the spec's info.description.
const versionOneUrls = new Set(["/api/users/auth/refresh"]);

export const createSdk = (config: SdkConfig = {}) => {
	const client = createClient(
		createConfig({
			baseUrl: config.baseUrl ?? "https://auth.scouting.org",
			auth: config.token,
			headers: { Accept: "application/json; version=2" },
		}),
	);
	client.interceptors.request.use((request, options) => {
		if (versionOneUrls.has(options.url)) {
			request.headers.set("Accept", "application/json; version=1");
		}
		return request;
	});
	return new Sdk({ client });
};
