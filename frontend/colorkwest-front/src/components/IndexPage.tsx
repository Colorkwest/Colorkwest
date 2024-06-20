import css from './IndexPage.module.css';
import { useState, useEffect } from "react";
import { QuestBoxComponent } from './QuestBoxComponent';

export function ColorkwestPage() {
  const user = {
    "ID": "Lucky",
    "LastName": "Lucky",
    "FirstName": "Li",
    "Department": "Biz Engineer",
    "Email": "lucky@colokrew.com",
    "Icon": "1.png",
    "QuestHistory": ["QuestUUID", "QuestUUID"],
    "Traits": { "Charisma": 1, "Intelligent": 0, "Dexterity": 5, "Stength": 3 },
    "HistoryTraits": { "Charisma": 10, "Intelligent": 10, "Dexterity": 10, "Stength": 10 },
    "Points": 0,
    "Title": "Helper",
    "IconFrame": "Gold",
    "QuestBoxFrame": "Silver",
  }

  const question = {
    "Title": "質問１",
    "Description": "これは質問１です。",
    "CreatedAt": "2024/06/22",
    "Expired": "2024/06/22",
    "Hardness": "Easy",
    "Award": 1,
    "Requirement": { "Charisma": 1, "Intelligent": 0, "Dexterity": 5, "Stength": 3 },
    "Requester": "Hal",
    "Catagory": "Question",
    "Status": "Open",
    "Participantes": [user, user], // 参加した人
    "Limit": 10, // number of get award
    "Answers": ["1", "2", "3"],
    "Tag": ["Tag1", "Tag2"],
  }
  const question2 = {
    "Title": "質問2",
    "Description": "これは質問2です。",
    "CreatedAt": "2024/06/22",
    "Expired": "2024/06/22",
    "Hardness": "Easy",
    "Award": 1,
    "Requirement": { "Charisma": 1, "Intelligent": 0, "Dexterity": 5, "Stength": 3 },
    "Requester": "Hal",
    "Catagory": "Question",
    "Status": "Done",
    "Participantes": [user, user], // 参加した人
    "Limit": 2, // number of get award
    "Answers": ["1", "2", "3"],
    "Tag": ["Tag1", "Tag2"],
  }
  const quest = {
    "Title": "任務3",
    "Description": "Colorkew Biz を開発",
    "CreatedAt": "2024/06/22 12:00:00",
    "Expired": "2025/06/22 14:30:30",
    "Hardness": "Hard",
    "Requirement": { "Charisma": 100, "Intelligent": 50, "Dexterity": 50, "Stength": 30 },
    "Requester": "Hal",
    "Catagory": "Quest",
    "Award": 1,
    "Status": "Open",
    "Participantes": [], // 参加した人
    "Limit": 1, // number of get award
    "Tag": ["Tag1", "Tag2"],
  }

  const quest2 = {
    "Title": "任務3",
    "Description": "Colorkew Biz を開発",
    "CreatedAt": "2024/06/22 12:00:00",
    "Expired": "2025/06/22 14:30:30",
    "Hardness": "Hard",
    "Requirement": { "Charisma": 100, "Intelligent": 50, "Dexterity": 50, "Stength": 30 },
    "Requester": "Hal",
    "Catagory": "Quest",
    "Award": 1,
    "Status": "Done",
    "Participantes": [], // 参加した人
    "Limit": 10, // number of get award
    "Tag": ["Tag1", "Tag2"],
  }

  const questList = [question, quest, question2, quest2];


  const handleAnswer = (answer: string) => {
    alert(answer);
  }

  const handleAccept = () => {
    alert('accept');
  }

  // const [boardList, setBoardList] = useState(questList);

  // useEffect(() => {
  //   // call the api
  //   setBoardList(questList);
  // }, [questList]);

  return (
    <>
      <p>This is Colorkwest</p>
      {questList.map((item, index) => {
        return (
          <div key={index}>
            <QuestBoxComponent quest={item} handleAccept={handleAccept} handleAnswer={handleAnswer} />
          </div>
        )
      })}
    </>
  )
}
