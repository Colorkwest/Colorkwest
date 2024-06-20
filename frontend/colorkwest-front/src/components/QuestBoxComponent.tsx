import css from './IndexPage.module.css';
import { useState, useEffect } from "react";

interface Quest {
  Title: string;
  Description: string;
  Expired: string;
  CreatedAt: string;
  Requester: string;
  Catagory: string,
  Status: string,
  Participantes: Array<string>,
  Limit: number,
  Answers: Array<string>,
  Tags: Array<string>,
}

interface Props {
  quest: Quest;
  handleAnswer: (txt: string) => void;
  handleAccept: () => void;
}

export function QuestBoxComponent({ quest, handleAccept, handleAnswer }: Props) {
  const [expended, setExpended] = useState<boolean>(false);
  const [inputAnswer, setInputAnswer] = useState<string>("");

  return (
    <div className={css.questbox}>
      <div onClick={() => setExpended(x => !x)}>
        <p>{quest.Requester?.ID}</p>
        <p>{quest.Title}</p>
        <p>{quest.Description}</p>
        <p>Create: {quest.CreatedAt}</p>
        <p>Expored: {quest.Expired}</p>
        <div>
          {quest.Participantes?.map((user, userindex) =>
            <a key={"user_" + userindex}>1{userindex}-{user.ID}</a>
          )}
        </div>
        <p>{quest.Participantes?.length}/{quest.Limit}</p>
        {quest.Tags?.map((tag, tagindex) => {
          return (
            <div key={"tag_" + tagindex}>{tag}</div>
          );
        })}
        <p>{quest.Status}</p>
      </div>
      {
        expended && (
          <div>
            {quest.Catagory === "Quest" ? (
              <>
                {quest.Status != "Done" ? (<button onClick={handleAccept}>Accpet</button>) : (<div>This quest is finished.</div>)}
              </>
            ) : (
              <>
                {quest.Status != "Done" ? (
                  <div>
                    <input type="text" placeholder='please inpu your answer' value={inputAnswer} onChange={(e) => { setInputAnswer(e.target.value) }}></input>
                    <button onClick={() => handleAnswer(inputAnswer)}>Answer</button>
                  </div>) : (
                  <div>This answer is closed.</div>
                )
                }
                <ol>
                  {quest.Answers?.map((item2, index) =>
                    <p key={index}>{item2}</p>
                  )}
                </ol>
              </>
            )}
          </div>
        )
      }
    </div >
  );
}
