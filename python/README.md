# 🎓 ReAG Python SDK

## Introduction

The ReAG SDK provides a production-grade framework for integrating Reasoning Augmented Generation (ReAG) into your applications. Designed to work with both Python and Typescript, this SDK simplifies document ingestion and intelligent querying without the need for API keys.

By removing the complexities of traditional RAG systems, the SDK enables developers to directly ingest markdown formatted documents complete with metadata and execute contextual queries seamlessly.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
  - [Initialization](#initialization)
  - [Document Structure](#document-structure)
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
1. Ensure Python 3.9+ is installed.
2. Install using npm:
   ```bash
   poetry add reag
   ```

## Quick Start
```python
from reag.client import ReagClient, Document


 async with ReagClient() as client:
        docs = [
            Document(
                name="Superagent",
                content="Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
                metadata={
                    "url": "https://superagent.sh",
                    "source": "web",
                },
            ),
        ]
        response = await client.query("What is Superagent?", documents=docs)

```

## API Reference

### Initialization
Initialize the client by providing required configuration options:

```typescript
client = new ReagClient(
  model: "o3-mini", // LiteLLM model name
  system: Optional[str] // Optional system prompt
  batchSize: Optional[Number] // Optional batch size
  schema: Optional[BaseModel] // Optional Pydantic schema
);
```

### Document Structure
Documents should follow this structure:
```python
document = Document(
    name="Superagent",
    content="Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
    metadata={
        "url": "https://superagent.sh",
        "source": "web",
    },
)
```

### Querying
Query documents with optional filters:

```python
docs = [
    Document(
        name="Superagent",
        content="Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
        metadata={
            "url": "https://superagent.sh",
            "source": "web",
            "id": "sa-1",
        },
    ),
    Document(
        name="Superagent",
        content="Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
        metadata={
            "url": "https://superagent.sh",
            "source": "web",
            "id": "sa-2",
        },
    ),
]
options = {"filter": [{"key": "id", "value": "sa-1", "operator": "equals"}]}
response = await client.query(
    "What is Superagent?", documents=docs, options=options
)
```

Response structure:
```python
content: str
reasoning: str
is_irrelevant: bool
document: Document
```

Example filters:
- Filter by metadata field:
  ```python
  options = {"filter": [{"key": "id", "value": "sa-1", "operator": "equals"}]}
  ```
- Filter by numeric values:
  ```python
  options = {
    "filter": [{"key": "version", "value": 2, "operator": "greaterThanOrEqual"}]
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
