from datetime import datetime
from enum import Enum

from pydantic import BaseModel


class Status(Enum):
    OPEN = 1
    PENDING = 2
    COMPLETED = 3
    CANCELLED = 4


class QuestType(Enum):
    BRAIN = 1
    BRAWN = 2


class Trait(Enum):
    STR = 1
    DEX = 2
    CHA = 3
    INT = 4


class User(BaseModel):
    id: int
    name: str
    str: int
    dex: int
    cha: int
    int: int


class BrainAnswer(BaseModel):
    quest: int
    author: int
    text: str
    accepted: bool
    created_at: datetime


class Quest(BaseModel):
    id: int
    type: QuestType
    author: int
    title: str
    description: str
    status: Status
    trait: Trait
    deadline: datetime
    max_participants: int  # 0: unlimited


class CreateQuest(BaseModel):
    type: QuestType
    author: int
    title: str
    description: str
    status: Status
    trait: Trait
    deadline: datetime
    max_participants: int  # 0: unlimited


class BrawnParticipant(BaseModel):
    quest: int
    user: int
    created_at: datetime


class DetailedQuest(BaseModel):
    id: int
    type: QuestType
    author: int
    title: str
    description: str
    status: Status
    trait: Trait
    deadline: datetime
    max_participants: int  # 0: unlimited
    brain_answers: list[BrainAnswer]
    brawn_participants: list[BrawnParticipant]


class QuestResponse(BaseModel):
    quests: list[Quest]
