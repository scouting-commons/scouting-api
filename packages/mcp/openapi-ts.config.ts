import { defineConfig } from "@hey-api/openapi-ts";

import { defineMcpToolsPlugin } from "./src/tools/plugin.ts";

// One job per API, named by its host like the spec folders. `api` is the
// client property that API's SDK hangs off.
const specs = {
	"api.scouting.org": {
		api: "api",
		input: import.meta
			.resolve("@scouting-commons/scouting-api-spec/apis/api.scouting.org/openapi.yaml"),
	},
	"scoutconnect-api.scouting.org": {
		api: "scoutConnect",
		input: import.meta
			.resolve("@scouting-commons/scouting-api-spec/apis/scoutconnect-api.scouting.org/openapi.yaml"),
	},
};

export default defineConfig(
	Object.entries(specs).map(([host, { api, input }]) => ({
		input,
		output: {
			path: `src/tools/generated/${host}`,
			// Node runs src directly and doesn't map `.js` imports to `.ts` files
			importFileExtension: ".ts",
		},
		plugins: [
			// Writes each operation's request schemas, which become tool inputs
			{ name: "zod", metadata: true },
			defineMcpToolsPlugin({ api }),
		],
	})),
);
