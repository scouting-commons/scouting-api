import type { Sdk } from "./apis/auth.scouting.org.js";

// Tokens last 8 hours. Refreshing in the last hour leaves room for clock drift
// and slow requests.
const hour = 60 * 60 * 1000;
const refreshAfter = 7 * hour;
const expireAfter = 8 * hour;

type Credentials = { username: string; password: string };
type Session = { token: string; refreshAt: number; expiresAt: number };
type SessionResult = Promise<
	{ data: { token: string } } | { data: undefined; error: unknown }
>;

// Returns a token function for createSdk. It signs in on the first call,
// refreshes the token once it's close to expiring, and signs in again once it
// has expired. Calls made while a sign-in or refresh is in flight share it.
export const createSession = (auth: Sdk, credentials: Credentials) => {
	let current: Session | undefined;
	let pending: Promise<Session> | undefined;

	const start = async (request: () => SessionResult): Promise<Session> => {
		const startedAt = Date.now();
		const result = await request();
		if (!result.data) {
			throw new Error("Signing in to auth.scouting.org failed", {
				cause: result.error,
			});
		}
		return {
			token: result.data.token,
			refreshAt: startedAt + refreshAfter,
			expiresAt: startedAt + expireAfter,
		};
	};

	const renew = (session: Session | undefined) =>
		session && Date.now() < session.expiresAt
			? start(() => auth.authentication.refreshToken({ auth: session.token }))
			: start(() => auth.authentication.authenticate(credentials));

	return async () => {
		if (current && Date.now() < current.refreshAt) return current.token;
		pending ??= renew(current)
			.then((session) => (current = session))
			.finally(() => (pending = undefined));
		return (await pending).token;
	};
};
