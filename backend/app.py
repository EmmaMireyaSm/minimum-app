import strawberry
from strawberry.fastapi import GraphQLRouter
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn


# Define your GraphQL schema
@strawberry.type
class Query:
    hello: str = "Hello, world!"


schema = strawberry.Schema(Query)
graphql_app = GraphQLRouter(schema)

# Set up FastAPI
app = FastAPI()
app.include_router(graphql_app, prefix="/graphql")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Uvicorn entry point
if __name__ == "__main__":

    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="debug")
