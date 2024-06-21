from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.openapi.utils import get_openapi

from db import Tables, db, get_brain_answers, get_brawn_participants, get_quest_idx
from model import (
    BrainAnswer,
    BrawnParticipant,
    CreateQuest,
    DetailedQuest,
    Quest,
    QuestType,
    Status,
    User,
)

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

nextId = len(db[Tables.QUEST]) + 1


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
            print(brain_answers)
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
async def create_quest(quest: CreateQuest):
    global nextId
    newQuest = Quest(**quest.dict(), id=nextId)
    nextId += 1
    db[Tables.QUEST].append(newQuest)
    return newQuest


@app.patch("/quests/{quest_id}")
async def edit_quest(quest_id, quest: Quest):
    qi = get_quest_idx(quest_id)
    if qi is None:
        raise HTTPException(status_code=404, detail="Quest not found")

    db[Tables.QUEST][qi] = quest
    return db[Tables.QUEST][qi]


@app.post("/quests/{quest_id}/answer")
async def answer_brain(quest_id, answer: BrainAnswer):
    db[Tables.BRAIN_ANSWER].append(answer)
    return db[Tables.BRAIN_ANSWER][-1]


@app.post("/quests/{quest_id}/participate")
async def participiate_brawn(quest_id, participant: BrawnParticipant):
    db[Tables.BRAWN_PARTICIPANT].append(participant)
    return db[Tables.BRAWN_PARTICIPANT][-1]


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


@app.post("/answer/{quest_id}/toggle")
async def toggle_favorite(quest_id, json: dict):
    ans = None
    for idx, answer in enumerate(db[Tables.BRAIN_ANSWER]):
        if answer.quest == int(quest_id) and answer.author == int(json["author"]):
            ans = answer
            break
    else:
        raise HTTPException(status_code=404, detail="Answer not found")

    ans.accepted = not ans.accepted

    db[Tables.BRAIN_ANSWER][idx] = ans
    return ans
