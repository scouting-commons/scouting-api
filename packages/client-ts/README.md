# scouting-api

**Unofficial TypeScript client for Scouting America APIs, generated from the [scouting-api](https://github.com/scouting-commons/scouting-api) specs.**

> [!NOTE]
> This project is not affiliated with or endorsed by Scouting America.
>
> Calling these APIs is subject to Scouting America's terms of service, whether you call them using this tool or any other way. Use this tool responsibly and at your own risk.
>
> This tool grants no access beyond what Scouting America already gives you. Every endpoint is either public or unlocked by your own Scouting America credentials, which you must supply for any logged-in operations.
>
> This is not a hosted service. Your requests go straight from your machine to Scouting America- there is no telemetry and we (Scouting Commons) cannot see your data or credentials.

## Install

```sh
npm install scouting-api
```

## Usage

`createScoutingClient` returns one SDK per API: `api` for `api.scouting.org`, `auth` for `auth.scouting.org`, and `scoutConnect` for `scoutconnect-api.scouting.org`. Each SDK groups its operations by the spec's tags, and each operation returns the parsed response as `data`, or the API's error response as `error`:

```ts
import { createScoutingClient } from "scouting-api";

const scouting = createScoutingClient({ auth: "none" });

const { data, error } = await scouting.api.advancement.listMeritBadges({
	id: "3",
});
if (error) throw new Error(error.message);

console.log(data.meritBadges[0]?.name);
```

An operation's parameters all go in its first argument, whether the API takes them in the path, query, headers, or body:

```ts
const { data } = await scouting.api.advancement.getRank({ rankId: 1 });
```

The client already handles the API-wide quirks listed in each spec's `info.description`, so you don't need to.

### Auth

`auth` is required. Pass `"none"` to call public endpoints only, or a my.scouting.org username and password:

```ts
const scouting = createScoutingClient({ auth: { username, password } });
```

Sign-in is done lazily (on the first API request that requires a token). When signing in fails, the request returns an `Error` as `error`, with the API's response as its `cause`.

To manage the token yourself, pass it instead, as a string or a function that returns the current one:

```ts
const scouting = createScoutingClient({ auth: { token } });
const scouting = createScoutingClient({
	auth: { token: () => store.get("token") },
});
```

The token is sent only on operations that require one, so public endpoints never trigger a sign-in.

### Base URLs

`baseUrl` replaces an API's host, such as to route requests through a CORS proxy. Set it for each API you call:

```ts
const scouting = createScoutingClient({
	auth: "none",
	baseUrl: { api: "https://proxy.example.com/api.scouting.org" },
});
```

### One API

Each API also has its own import path, named by its host, whose `createSdk` builds just that API's SDK. It takes the same options, for that one API:

```ts
import { createSdk } from "scouting-api/api.scouting.org";

const api = createSdk({ token });
```

### Validation

Every operation checks its parameters and the API's response against the spec with [Zod](https://zod.dev). When a check fails, the operation doesn't send the request or return the data: it returns the `ZodError` as `error`. Unknown fields in a response pass the check and are dropped from `data`.

The Zod schemas and the TypeScript types are exported too, under each API's namespace, named after the spec's schemas and operations. Schemas have a `z` prefix:

```ts
import { api } from "scouting-api";

const meritBadge: api.MeritBadge = api.zMeritBadge.parse(json);
```

## APIs

| API                             | Docs                                                                                   |
| ------------------------------- | -------------------------------------------------------------------------------------- |
| `api.scouting.org`              | [Docs](https://scouting-commons.github.io/scouting-api/api.scouting.org/)              |
| `auth.scouting.org`             | [Docs](https://scouting-commons.github.io/scouting-api/auth.scouting.org/)             |
| `scoutconnect-api.scouting.org` | [Docs](https://scouting-commons.github.io/scouting-api/scoutconnect-api.scouting.org/) |

## Contributing

The client is generated from the specs, so a wrong field or missing endpoint is fixed in the spec. Issues and pull requests are welcome in the [scouting-api repo](https://github.com/scouting-commons/scouting-api).

## License

[MIT](LICENSE)
