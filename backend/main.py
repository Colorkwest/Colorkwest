from fastapi import FastAPI
from db import db, Tables
from model import Quest, User

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Goodbye World!"}


@app.get("/quests")
async def get_quests() -> list[Quest]:
    return db[Tables.QUEST]


@app.get("/users/{user_id}")
async def get_user(user_id: int) -> User:
    return db[Tables.USER][user_id]
