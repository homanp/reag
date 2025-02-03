import { describe, it, expect, beforeEach } from "@jest/globals";
import { openai } from "@ai-sdk/openai";

import { ReagClient, ClientOptions } from "../src/client";

describe("typescript client", () => {
  let client: ReagClient;

  beforeEach(() => {
    // Create a fresh mock for each test with all required properties
    const options: ClientOptions = {
      model: openai("o3-mini", { structuredOutputs: true }),
      system: "test system",
    };

    client = new ReagClient(options);
  });

  describe("query", () => {
    it("should successfully return model response", async () => {
      const testPrompt = "What is Superagent?";
      const result = await client.query(testPrompt, [
        {
          name: "Superagent",
          content:
            "Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
          metadata: {
            url: "https://superagent.sh",
            source: "web",
          },
        },
      ]);

      expect(result).toBeInstanceOf(Array);
      expect(result[0]).toHaveProperty("content");
      expect(result[0]).toHaveProperty("reasoning");
      expect(result[0]).toHaveProperty("isIrrelevant");
    }, 30_000);
  });

  describe("filtered query", () => {
    it("should successfully return model response with string filters", async () => {
      const testPrompt = "What is Superagent?";
      const result = await client.query(
        testPrompt,
        [
          {
            name: "Superagent",
            content:
              "Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
            metadata: {
              url: "https://superagent.sh",
              source: "web",
              id: "sa-1",
            },
          },
          {
            name: "Superagent",
            content:
              "Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
            metadata: {
              url: "https://superagent.sh",
              source: "web",
              id: "sa-2",
            },
          },
        ],
        {
          filter: [
            {
              key: "id",
              value: "sa-1",
              operator: "equals",
            },
          ],
        }
      );

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(1);
      expect(result[0]).toHaveProperty("content");
      expect(result[0]).toHaveProperty("reasoning");
      expect(result[0]).toHaveProperty("isIrrelevant");
      expect(result[0].document.metadata?.id).toBe("sa-1");
    }, 30_000);

    it("should successfully return model response with integer filters", async () => {
      const testPrompt = "What is Superagent?";
      const result = await client.query(
        testPrompt,
        [
          {
            name: "Superagent",
            content:
              "Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
            metadata: {
              version: 1,
              source: "web",
              id: "sa-1",
            },
          },
          {
            name: "Superagent",
            content:
              "Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
            metadata: {
              version: 2,
              source: "web",
              id: "sa-2",
            },
          },
        ],
        {
          filter: [
            {
              key: "version",
              value: 2,
              operator: "greaterThanOrEqual",
            },
          ],
        }
      );

      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(1);
      expect(result[0]).toHaveProperty("content");
      expect(result[0]).toHaveProperty("reasoning");
      expect(result[0]).toHaveProperty("isIrrelevant");
      expect(result[0].document.metadata?.version).toBe(2);
    }, 30_000);
  });
});
