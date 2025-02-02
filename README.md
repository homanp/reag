# 🎓 ReAG SDK

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
  - [Python Example](#python-example)
  - [Typescript Example](#typescript-example)
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

## Installation

### Python
1. Ensure Python 3.8+ is installed.
2. Install the SDK via pip:
   ```bash
   pip install reag-sdk
   ```
3. Verify the installation:
   ```bash
   python -m reag_sdk --help
   ```

### Typescript
1. Ensure Node.js (14+) is installed.
2. Install using npm:
   ```bash
   npm install reag-sdk
   ```
3. Or using Yarn:
   ```bash
   yarn add reag-sdk
   ```

## Quick Start

### Python Example
```python
import reag_sdk

# Initialize the SDK (no API key required)
client = reag_sdk.Client()

# Prepare markdown content and metadata for ingestion
with open("document.md", "r", encoding="utf-8") as f:
    markdown_content = f.read()

metadata = {
    "title": "Document Title",
    "description": "A brief description of the document",
    "tags": ["reag", "sdk", "example"]
}

# Ingest the document with metadata and markdown content
client.ingest_document(document_id="doc1", metadata=metadata, content=markdown_content)

# Query for information
response = client.query("Describe the main features of the SDK")
print(response)
```

### Typescript Example
```typescript
import { Client } from 'reag-sdk';
import * as fs from 'fs';

// Initialize the SDK (no API key required)
const client = new Client();

// Prepare markdown content and metadata for ingestion
const markdownContent = fs.readFileSync('document.md', 'utf-8');
const metadata = {
  title: "Document Title",
  description: "A brief description of the document",
  tags: ["reag", "sdk", "example"]
};

// Ingest the document with metadata and markdown content
client.ingestDocument('doc1', metadata, markdownContent)
  .then(() => client.query("Describe the main features of the SDK"))
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

## API Reference

### Initialization
Initialize the client without the need for an API key.

### Document Ingestion
- **Python Method:** `ingest_document(document_id: str, metadata: dict, content: str)`
- **Typescript Method:** `ingestDocument(documentId: string, metadata: object, content: string)`

These methods allow you to ingest documents by providing metadata (as key-value pairs) and content in markdown.

### Querying
Use the `query` method to retrieve processed information based on your contextual queries.

## Contributing

We welcome contributions from the community. Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on reporting issues, suggesting improvements, and submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Additional Resources
- [ReAG Blog Post](https://www.superagent.sh/blog/reag-reasoning-augmented-generation) - A deep dive into ReAG.
- [Documentation](https://your-docs-url.com) - Additional guides and references.

## Contact

For support or inquiries, please contact:
- [Create Issue](https://github.com/your-repo/issues)
- X: [@superagent_ai](https://x.com/superagent_ai)
