from fastapi import FastAPI
from db import db, Tables
from model import Quest

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Goodbye World!"}


@app.get("/quests")
async def get_quests() -> list[Quest]:
    return db[Tables.QUEST]
