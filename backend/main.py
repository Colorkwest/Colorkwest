from fastapi import FastAPI
from db import db, Tables
from model import Quest, User
from fastapi.openapi.utils import get_openapi
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Goodbye World!"}


@app.get("/quests")
async def get_quests() -> list[Quest]:
    return db[Tables.QUEST]


@app.get("/users/{user_id}")
async def get_user(user_id: int) -> User:
    return db[Tables.USER][user_id]


def custom_openapi():
    openapi_schema = get_openapi(
        title="openapi", routes=app.routes, version="3.0.1", openapi_version="3.0.1"
    )
    openapi_schema["info"]["x-logo"] = {
        "url": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
    }
    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi
