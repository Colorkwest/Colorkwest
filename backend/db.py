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


user1 = User(id=1, name="Kiyo", str=9, dex=2, cha=1, int=4)
user2 = User(id=2, name="Vaness", str=5, dex=3, cha=42, int=4)
user3 = User(id=3, name="Maiko", str=9, dex=2, cha=1, int=4)
user4 = User(id=4, name="Josh", str=5, dex=3, cha=42, int=4)
user5 = User(id=5, name="Nikita", str=9, dex=2, cha=1, int=4)
user6 = User(id=6, name="Keiji", str=5, dex=3, cha=42, int=4)
user7 = User(id=7, name="Sonika", str=9, dex=2, cha=1, int=4)
user8 = User(id=8, name="Hugo", str=5, dex=3, cha=42, int=4)
user9 = User(id=9, name="Bryan", str=9, dex=2, cha=1, int=4)
user10 = User(id=10, name="Keiko", str=5, dex=3, cha=42, int=4)
user11 = User(id=11, name="Kohei", str=9, dex=2, cha=1, int=4)

brain1 = Quest(
    id=1,
    type=QuestType.BRAIN,
    author=3,
    title="What should I name my new cat?",
    max_participants=0,
    description="He’s brown and fluffy!",
    status=Status.OPEN,
    trait=Trait.INT,
    deadline=datetime.today() + timedelta(days=1),
)

brain2 = Quest(
    id=4,
    type=QuestType.BRAIN,
    author=4,
    title="Please introduce people around you to me!",
    max_participants=0,
    description="""1. South Korean
2. Japanese living in South Korea
3. Japanese working for a South Korea company""",
    status=Status.OPEN,
    trait=Trait.INT,
    deadline=datetime.today() + timedelta(days=1),
)

brain_answer1 = BrainAnswer(
    quest=1,
    author=1,
    text="Brownies",
    accepted=True,
    created_at=datetime.today() - timedelta(days=2),
)
brain_answer2 = BrainAnswer(
    quest=1,
    author=5,
    text="Protein",
    accepted=False,
    created_at=datetime.today() - timedelta(days=1),
)

brawn1 = Quest(
    id=2,
    type=QuestType.BRAWN,
    author=8,
    title="We need help to prepare the gift packs for EXPO tomorrow!",
    max_participants=20,
    description="",
    status=Status.OPEN,
    trait=Trait.STR,
    deadline=datetime.today() + timedelta(days=4),
)

brawn2 = Quest(
    id=3,
    type=QuestType.BRAWN,
    author=2,
    title="Any volunteer to host next Friday’s Joyful Studio?",
    max_participants=5,
    description="We are open to multiple participants",
    status=Status.OPEN,
    trait=Trait.DEX,
    deadline=datetime.today() + timedelta(days=4),
)

brawn3 = Quest(
    id=5,
    type=QuestType.BRAWN,
    author=12,
    title="Can anyone go to lunch with Fred?",
    max_participants=3,
    description="He likes everything except raw fish!",
    status=Status.OPEN,
    trait=Trait.STR,
    deadline=datetime.today() + timedelta(days=4),
)

brawn_participant1 = BrawnParticipant(quest=1, user=2)

users = [user1, user2]
quests = [brain1, brawn1, brawn2, brain2, brawn3]
brain_answers = [brain_answer1, brain_answer2]
brawn_participants = [brawn_participant1]

db = {
    Tables.USER: users,
    Tables.QUEST: quests,
    Tables.BRAIN_ANSWER: brain_answers,
    Tables.BRAWN_PARTICIPANT: brawn_participants,
}


def get_quest_idx(quest_id):
    for i, q in enumerate(db[Tables.QUEST]):
        if q.id == quest_id:
            break
    else:
        return None

    return i


def get_brain_answers(quest_id):
    answers = []
    for answer in db[Tables.BRAIN_ANSWER]:
        if answer.quest == quest_id:
            answers.append(answer)

    return answers


def get_brawn_participants(quest_id):
    participants = []
    for participant in db[Tables.BRAWN_PARTICIPANT]:
        if participant.quest == quest_id:
            participants.append(participant)

    return participants
