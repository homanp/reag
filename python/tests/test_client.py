import pytest
from reag.client import ReagClient, Document, QueryResult


@pytest.mark.asyncio
async def test_query_with_documents():
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
        assert response is not None
        assert len(response) == 1
        result = response[0]
        assert isinstance(result, QueryResult)
        assert result.content is not None
        assert result.document is not None
        assert result.reasoning is not None
        assert isinstance(result.is_irrelevant, bool)


@pytest.mark.asyncio
async def test_query_with_metadata_filter():
    async with ReagClient() as client:
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
        assert response is not None
        assert len(response) == 1
        result = response[0]
        assert isinstance(result, QueryResult)
        assert result.document.metadata["id"] == "sa-1"


@pytest.mark.asyncio
async def test_query_with_integer_filter():
    async with ReagClient() as client:
        docs = [
            Document(
                name="Superagent",
                content="Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
                metadata={
                    "version": 1,
                    "source": "web",
                    "id": "sa-1",
                },
            ),
            Document(
                name="Superagent",
                content="Superagent is a workspace for AI-agents that learn, perform work, and collaborate.",
                metadata={
                    "version": 2,
                    "source": "web",
                    "id": "sa-2",
                },
            ),
        ]
        options = {
            "filter": [{"key": "version", "value": 2, "operator": "greaterThanOrEqual"}]
        }
        response = await client.query(
            "What is Superagent?", documents=docs, options=options
        )
        assert response is not None
        assert len(response) == 1
        result = response[0]
        assert isinstance(result, QueryResult)
        assert result.document.metadata["version"] == 2


@pytest.mark.asyncio
async def test_query_returns_empty_for_irrelevant_docs():
    async with ReagClient() as client:
        docs = [
            Document(
                name="Irrelevant Doc",
                content="This document contains completely unrelated content about cooking recipes.",
                metadata={"type": "recipe", "cuisine": "italian"},
            )
        ]
        response = await client.query("What is Superagent?", documents=docs)
        print(response)
        assert response is not None
        assert len(response) == 0  # Should be empty since doc is irrelevant
