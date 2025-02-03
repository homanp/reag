import { z } from "zod";

export const RESPONSE_SCHEMA = z.object({
  content: z
    .string()
    .describe("The source of the information, relevant passage"),
  reasoning: z
    .string()
    .describe("The reasoning behind why the source is relevant"),
  isIrrelevant: z
    .boolean()
    .describe("Whether the source is relevant to the question"),
});
