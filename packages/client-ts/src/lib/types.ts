// A bearer token, or a function that returns the current one
type Token = string | (() => string | Promise<string>);

/** options shared by each API's createSdk */
export type SdkConfig = {
	/** replace the default base url of the host */
	baseUrl?: string;
	/** api auth token */
	token?: Token;
};

/** options for initializing the scouting client */
export type ScoutingClientConfig = {
	/**
	 * `"none"` for public endpoints only, a token you manage, or a
	 * my.scouting.org username and password to sign in with on first use
	 */
	auth: "none" | { token: Token } | { username: string; password: string };
	/** replaces each API's default host, such as to route requests through a proxy */
	baseUrl?: { api?: string; auth?: string; scoutConnect?: string };
};
