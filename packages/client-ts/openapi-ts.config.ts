import { defineConfig, OperationStrategy } from "@hey-api/openapi-ts";

// One client per API, named by its host like the spec folders. The paths are
// written out in full so knip can see the dependency on the spec package.
const specs = {
	"api.scouting.org": import.meta
		.resolve("@scouting-commons/scouting-api-spec/apis/api.scouting.org/openapi.yaml"),
	"auth.scouting.org": import.meta
		.resolve("@scouting-commons/scouting-api-spec/apis/auth.scouting.org/openapi.yaml"),
	"scoutconnect-api.scouting.org": import.meta
		.resolve("@scouting-commons/scouting-api-spec/apis/scoutconnect-api.scouting.org/openapi.yaml"),
};

export default defineConfig(
	Object.entries(specs).map(([host, input]) => ({
		input,
		output: `src/generated/${host}`,
		plugins: [
			"@hey-api/client-fetch",

			{
				name: "zod",
				// include the zod schemas in the generated index file
				includeInEntry: true,
			},

			{
				name: "@hey-api/sdk",
				// One object holds every path, query, header, and body parameter
				paramsStructure: "flat",
				// Each operation checks its request and response against the Zod schemas
				validator: true,
				operations: {
					// emit the SDK as a single class, with the operations nested by tag.
					// This goes in `strategy` rather than `nesting` because a custom
					// `nesting` makes type names come from paths instead of operationIds.
					strategy: OperationStrategy.single({
						root: "Sdk",
						path: (operation) => {
							const [tag] = operation.tags ?? [];
							if (!tag || !operation.operationId) {
								throw new Error(
									`${host} ${operation.method} ${operation.path} needs a tag and an operationId`,
								);
							}
							return [tag, operation.operationId];
						},
					}),
					// A custom strategy makes the methods static unless this is set
					methods: "instance",
					segmentName: { case: "camelCase" },
				},
			},
		],
	})),
);
