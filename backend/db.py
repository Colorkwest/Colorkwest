# DUMMY DATA
from datetime import datetime, timedelta
from enum import Enum
from model import (
    BrainAnswer,
    BrawnParticipant,
    Quest,
    QuestType,
    User,
    Status,
    Trait,
)


class Tables(Enum):
    USER = 1
    QUEST = 2
    BRAIN_ANSWER = 3
    BRAWN_PARTICIPANT = 4


user1 = User(id=1, name="Mr. Brawn", str=9, dex=2, cha=1, int=4)
user2 = User(id=2, name="Mrs. Charisma", str=5, dex=3, cha=42, int=4)

brain1 = Quest(
    id=1,
    type=QuestType.BRAIN,
    author=2,
    title="Help  me think",
    max_participants=0,
    description="What should I name my cat?",
    status=Status.OPEN,
    trait=Trait.CHA,
    deadline=datetime.today() + timedelta(days=1),
)

brain_answer1 = BrainAnswer(quest=1, author=1, text="Protein", accepted=False)

brawn1 = Quest(
    id=2,
    type=QuestType.BRAWN,
    author=1,
    title="Help  me lift",
    max_participants=3,
    description="I dropped my refridgerator and it is heavy. Please pick it up for me",
    status=Status.OPEN,
    trait=Trait.STR,
    deadline=datetime.today() + timedelta(days=4),
)

brawn_participant1 = BrawnParticipant(quest=1, user=2)

users = {1: user1, 2: user2}
quests = [brain1, brawn1]
brain_answers = [brain_answer1]
brawn_participants = [brawn_participant1]

db = {
    Tables.USER: users,
    Tables.QUEST: quests,
    Tables.BRAIN_ANSWER: brain_answers,
    Tables.BRAWN_PARTICIPANT: brawn_participants,
}
