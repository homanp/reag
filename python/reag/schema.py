from pydantic import BaseModel
from typing import List


class ResponseSchema(BaseModel):
    content: str
    reasoning: str
    is_irrelevant: bool


class ResponseSchemaMessage(BaseModel):
    source: ResponseSchema
