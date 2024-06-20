from fastapi import FastAPI, HTTPException
from db import db, Tables, get_brain_answers, get_brawn_participants, get_quest_idx
from model import (
    DetailedQuest,
    Quest,
    QuestType,
    Status,
    User,
)
from fastapi.openapi.utils import get_openapi
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "*",
    "http://localhost:5174",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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


@app.get("/")
async def root():
    return {"message": "Goodbye World!"}


@app.get("/quests")
async def get_quests() -> list[DetailedQuest]:
    detailed_quests = []
    for q in db[Tables.QUEST]:
        brain_answers = []
        brawn_participants = []

        if q.type == QuestType.BRAIN:
            brain_answers = get_brain_answers(q.id)
        elif q.type == QuestType.BRAWN:
            brawn_participants = get_brawn_participants(q.id)

        detailed_quests.append(
            DetailedQuest(
                **q.__dict__,
                brain_answers=brain_answers,
                brawn_participants=brawn_participants,
            )
        )

    return detailed_quests


@app.post("/quests")
async def create_quest(quest: Quest):
    quest.id = len(db[Tables.QUEST])
    db[Tables.QUEST].append(quest)

    return db[Tables.QUEST][-1]


@app.patch("/quests/{quest_id}")
async def edit_quest(quest_id, quest: Quest):
    qi = get_quest_idx(quest_id)
    if qi is None:
        raise HTTPException(status_code=404, detail="Quest not found")

    db[Tables.QUEST][qi] = quest
    return db[Tables.QUEST][qi]


@app.post("/quests/{quest_id}/complete")
async def complete_quest(quest_id):
    qi = get_quest_idx(quest_id)
    if qi is None:
        raise HTTPException(status_code=404, detail="Quest not found")

    db[Tables.QUEST][qi].status = Status.COMPLETED
    return db[Tables.QUEST][qi]


@app.post("/quests/{quest_id}/pending")
async def pending_quest(quest_id):
    qi = get_quest_idx(quest_id)
    if qi is None:
        raise HTTPException(status_code=404, detail="Quest not found")

    db[Tables.QUEST][qi].status = Status.PENDING
    return db[Tables.QUEST][qi]


@app.post("/quests/{quest_id}/cancel")
async def cancel_quest(quest_id):
    qi = get_quest_idx(quest_id)
    if qi is None:
        raise HTTPException(status_code=404, detail="Quest not found")

    db[Tables.QUEST][qi].status = Status.CANCELLED
    return db[Tables.QUEST][qi]


@app.get("/users")
async def get_users() -> dict[int, User]:
    return {u.id: u for u in db[Tables.USER]}
