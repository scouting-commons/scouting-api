import { client } from "./generated/scoutconnect-api.scouting.org/client.gen.js";

export * from "./generated/scoutconnect-api.scouting.org/index.js";
export * from "./generated/scoutconnect-api.scouting.org/zod.gen.js";
export { client };

// The API rejects the default User-Agent of Node's fetch. See the quirks in the
// spec's info.description.
client.setConfig({
	headers: {
		"User-Agent": "scouting-api",
	},
});
