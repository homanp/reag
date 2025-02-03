# 🎓 ReAG TypeScript SDK

## Introduction

The ReAG SDK provides a production-grade framework for integrating Reasoning Augmented Generation (ReAG) into your applications. Designed to work with both Python and Typescript, this SDK simplifies document ingestion and intelligent querying without the need for API keys.

By removing the complexities of traditional RAG systems, the SDK enables developers to directly ingest markdown formatted documents complete with metadata and execute contextual queries seamlessly.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
  - [Python](#python)
  - [Typescript](#typescript)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [Initialization](#initialization)
  - [Document Ingestion](#document-ingestion)
  - [Querying](#querying)
- [Contributing](#contributing)
- [License](#license)
- [Additional Resources](#additional-resources)
- [Contact](#contact)

## Features
- **Multi-language Support:** Available for both Python and Typescript.
- **Document Ingestion:** Ingest markdown formatted documents with associated metadata.
- **Intelligent Querying:** Retrieve sources and insights based on contextual queries.
- **Language Model Agnostic:** Works with any preferred language model.
- **Production Ready:** Robust, scalable, and designed for real-world applications.
- **Type Safety:** Full TypeScript support with comprehensive type definitions.

## Installation
1. Ensure Node.js (14+) is installed.
2. Install using npm:
   ```bash
   npm install @superagent-ai/reag
   ```
3. Or using Yarn:
   ```bash
   yarn add @superagent-ai/reag
   ```

## Quick Start
```typescript
import { ReagClient, ClientOptions } from 'reag';
import { openai } from "@ai-sdk/openai";

// Initialize the SDK with required options
const client = new ReagClient({
  model: openai("o3-mini", { structuredOutputs: true }),
  // system: optional system prompt here or use the default
});

// Example document with metadata
const document = {
  name: "Getting Started",
  content: "ReAG SDK is a framework for Reasoning Augmented Generation...",
  metadata: {
    url: "https://docs.example.com/getting-started",
    source: "documentation",
    id: "doc-1"
  }
};

// Query with document context and filters
const response = await client.query(
  "Describe the main features of the SDK",
  [document],
  {
    filter: [
      {
        key: "source",
        value: "documentation",
        operator: "equals"
      }
    ]
  }
);

// Response includes: content, reasoning, isIrrelevant, and document reference
console.log('Query Response:', response);
```

## API Reference

### Initialization
Initialize the client by providing required configuration options:

```typescript
const client = new ReagClient({
  model: openai("o3-mini", { structuredOutputs: true }),
  system?: string // Optional system prompt
  batchSize?: number // Optional batch size
  schema?: z.ZodSchema // Optional schema
});
```

### Document Structure
Documents should follow this structure:
```typescript
interface Document {
  name: string;
  content: string;
  metadata: {
    [key: string]: any;  // Custom metadata fields
  }
}
```

### Querying
Query documents with optional filters:

```typescript
const response = await client.query(
  query: string,
  documents: Document[],
  options?: {
    filter?: Array<{
      key: string;
      value: string | number;
      operator: "equals" | "greaterThanOrEqual" // and other operators
    }>
  }
);
```

Response structure:
```typescript
interface QueryResponse {
  content: string;      // Generated response
  reasoning: string;    // Reasoning behind the response
  isIrrelevant: boolean; // Relevance indicator
  document: Document;   // Reference to source document
}
```

Example filters:
- Filter by metadata field:
  ```typescript
  {
    filter: [
      {
        key: "source",
        value: "documentation",
        operator: "equals"
      }
    ]
  }
  ```
- Filter by numeric values:
  ```typescript
  {
    filter: [
      {
        key: "version",
        value: 2,
        operator: "greaterThanOrEqual"
      }
    ]
  }
  ```

## Contributing

We welcome contributions from the community. Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on reporting issues, suggesting improvements, and submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Additional Resources
- [ReAG Blog Post](https://www.superagent.sh/blog/reag-reasoning-augmented-generation) - A deep dive into ReAG.

## Contact

For support or inquiries, please contact:
- [Create Issue](https://github.com/superagent-ai/reag/issues)
- X: [@superagent_ai](https://x.com/superagent_ai)
