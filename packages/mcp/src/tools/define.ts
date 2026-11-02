import type { ScoutingClient } from "scouting-api";
import type { z } from "zod";

type Result = { data?: unknown; error?: unknown; response?: Response };

type ToolInfo = {
	name: string;
	title?: string | undefined;
	description?: string | undefined;
	readOnly: boolean;
	output?: z.ZodType | undefined;
};

// What the server registers. Every tool has this one shape, so they can share
// a loop.
export type Tool = ToolInfo & {
	input?: z.ZodObject | undefined;
	call: (scouting: ScoutingClient, args: unknown) => Promise<Result>;
};

// Wraps each generated tool, so its `call` is type-checked against its own
// input schema
export const defineTool = <Input extends z.ZodObject>(
	tool: ToolInfo & {
		input?: Input;
		call: (scouting: ScoutingClient, args: z.infer<Input>) => Promise<Result>;
	},
): Tool => ({
	...tool,
	// The MCP SDK validates args against `input` before calling the tool
	call: (scouting, args) => tool.call(scouting, args as z.infer<Input>),
});
