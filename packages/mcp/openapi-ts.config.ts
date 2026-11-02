import { defineConfig } from "@hey-api/openapi-ts";

import { defineMcpToolsPlugin } from "./src/tools/plugin.ts";

export default defineConfig({
	input: import.meta
		.resolve("@scouting-commons/scouting-api-spec/apis/api.scouting.org/openapi.yaml"),
	output: {
		path: "src/tools/generated",
		// Node runs src directly and doesn't map `.js` imports to `.ts` files
		importFileExtension: ".ts",
	},
	plugins: [
		// Writes each operation's request schemas, which become tool inputs
		{ name: "zod", metadata: true },
		defineMcpToolsPlugin(),
	],
});
