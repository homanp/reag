# 🎓 ReAG SDK

## Introduction

Traditional Retrieval-Augmented Generation (RAG) systems rely on a two-step process: first, semantic search retrieves documents based on surface-level similarities; then, a language model generates answers from those documents. While this method works, it often misses deeper contextual insights and can pull in irrelevant information. ReAG – Reasoning Augmented Generation – offers a robust alternative by feeding raw documents directly to the language model, allowing it to assess and integrate the full context. This unified approach leads to more accurate, nuanced, and context-aware responses.

# How ReAG Works

ReAG transforms document querying with a streamlined process:

- Raw Document Ingestion: Documents are processed in full, without prior chunking or indexing.
- Holistic Evaluation: The language model reads entire texts to determine their relevance and extract key information.
- Dynamic Synthesis: Relevant details are combined into comprehensive answers, mirroring human research methods.

This method eliminates the pitfalls of over-simplified semantic matches and delivers insights that truly address the query's intent.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Python](https://github.com/superagent-ai/reag/tree/main/python)
  - [Typescript](https://github.com/superagent-ai/reag/tree/main/typescript)
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
