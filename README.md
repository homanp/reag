# 🎓 ReAG SDK

## Introduction

The ReAG SDK provides a production-grade framework for integrating Reasoning Augmented Generation (ReAG) into your applications. Designed to work with both Python and Typescript, this SDK simplifies document ingestion and intelligent querying without the need for API keys.

By removing the complexities of traditional RAG systems, the SDK enables developers to directly ingest markdown formatted documents complete with metadata and execute contextual queries seamlessly.

## Table of Contents
- <br>[Introduction](#introduction)<br>- <br>[Features](#features)<br>- <br>[Installation](#installation)<br>   - <br>[Python](#python)<br>   - <br>[Typescript](#typescript)<br>- <br>[Quick Start](#quick-start)<br>   - <br>[Python Example](#python-example)<br>   - <br>[Typescript Example](#typescript-example)<br>- <br>[API Reference](#api-reference)<br>   - <br>[Initialization](#initialization)<br>   - <br>[Document Ingestion](#document-ingestion)<br>   - <br>[Querying](#querying)<br>- <br>[Contributing](#contributing)<br>- <br>[License](#license)<br>- <br>[Additional Resources](#additional-resources)<br>- <br>[Contact](#contact)<br>
## Features
- **Multi-language Support:** Available for both Python and Typescript.- **Document Ingestion:** Ingest markdown formatted documents with associated metadata.- **Intelligent Querying:** Retrieve sources and insights based on contextual queries.- **Language Model Agnostic:** Works with any preferred language model.- **Production Ready:** Robust, scalable, and designed for real-world applications.
## Installation

### Python
1. Ensure Python 3.8+ is installed.
2. Install the SDK via pip:

```
pip install reag-sdk
```
3. Verify the installation:

```
python -m reag_sdk --help
```

### Typescript
1. Ensure Node.js (14+) is installed.
2. Install using npm:

```
npm install reag-sdk
```
3. Or using Yarn:

```
yarn add reag-sdk
```

## Quick Start

### Python Example

```
import reag_sdk# Initialize the SDK (no API key required)client = reag_sdk.Client()# Prepare markdown content and metadata for ingestionwith open("document.md", "r", encoding="utf-8") as f:    markdown_content = f.read()metadata = {    "title": "Document Title",    "description": "A brief description of the document",    "tags": ["reag", "sdk", "example"]}# Ingest the document with metadata and markdown contentclient.ingest_document(document_id="doc1", metadata=metadata, content=markdown_content)# Query for informationresponse = client.query("Describe the main features of the SDK")print(response)
```

### Typescript Example

```
import { Client } from 'reag-sdk';import * as fs from 'fs';// Initialize the SDK (no API key required)const client = new Client();// Prepare markdown content and metadata for ingestionconst markdownContent = fs.readFileSync('document.md', 'utf-8');const metadata = {    title: "Document Title",    description: "A brief description of the document",    tags: ["reag", "sdk", "example"]};// Ingest the document with metadata and markdown contentclient.ingestDocument('doc1', metadata, markdownContent)    .then(() => client.query("Describe the main features of the SDK"))    .then(response => console.log(response))    .catch(error => console.error(error));
```

## API Reference

### Initialization

Initialize the client without the need for an API key.

### Document Ingestion
- **Python Method:** `ingest_document(document_id: str, metadata: dict, content: str)`- **Typescript Method:** `ingestDocument(documentId: string, metadata: object, content: string)`
These methods allow you to ingest documents by providing metadata (as key-value pairs) and content in markdown.

### Querying
- Use the `query` method to retrieve processed information based on your contextual queries.
## Contributing

We welcome contributions from the community. Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on reporting issues, suggesting improvements, and submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Additional Resources
- <br>[ReAG Blog Post](https://www.superagent.sh/blog/reag-reasoning-augmented-generation) - A deep dive into ReAG.- <br>[Documentation](https://your-docs-url.com) - Additional guides and references.
## Contact

For support or inquiries, please contact:
- Create issue
- X: [@superagent_ai](https://x.com/superagent_ai)<br>
