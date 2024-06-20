import { BrainAnswer } from '../generated/dto';
import { DetailedQuest } from '../generated/dto/detailedQuest';
import css from './IndexPage.module.css';
import { useState, useEffect } from "react";

interface Props {
  quest: DetailedQuest;
  handleAnswer: (txt: string) => void;
}

export function QuestionBoxComponent({ quest, handleAnswer }: Props) {
  const [expended, setExpended] = useState<boolean>(false);
  const [inputAnswer, setInputAnswer] = useState<string>("");

  return (
    <div className={css.questbox}>
      <div onClick={() => setExpended(x => !x)}>
        {/* <p>{quest.Requester?.ID}</p> */}
        <p>{quest.title}</p>
        <p>{quest.description}</p>
        {/* <p>Create: {quest.CreatedAt}</p> */}
        {/* <p>Expored: {quest.Expired}</p> */}
        <div>
          {quest.brain_answers?.map((item: BrainAnswer, index) =>
            <a key={"user_" + index}>{item.author}</a>
          )}
        </div>
        <p>{quest.brain_answers?.length}/{quest.max_participants}</p>
        {/* {quest.Tags?.map((tag, tagindex) => {
          return (
            <div key={"tag_" + tagindex}>{tag}</div>
          );
        })} */}
        <p>{quest.status}</p>
      </div>
      {
        expended && (
          <div>
            {quest.status ? (
              <div>
                <input type="text" placeholder='please inpu your answer' value={inputAnswer} onChange={(e) => { setInputAnswer(e.target.value) }} />
                <button onClick={() => handleAnswer(inputAnswer)}>Answer</button>
              </div>) : (
              <div>This answer is closed.</div>
            )
            }
            <ol>
              {quest.brain_answers?.map((item: BrainAnswer, index) =>
                <div key={index}>
                  <p >{item.accepted}</p>
                  <p>{item.author}</p>
                  <p>{item.accepted}</p>
                  <p>{item.accepted}</p>
                </div>
              )}
            </ol>
          </div>
        )
      }
    </div >
  );
}
