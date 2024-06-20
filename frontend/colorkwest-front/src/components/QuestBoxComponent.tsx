import { BrawnParticipant } from '../generated/dto';
import { DetailedQuest } from '../generated/dto/detailedQuest';
import css from './IndexPage.module.css';
import { useState, useEffect } from 'react';

interface Props {
  quest: DetailedQuest;
  // handleAnswer: (txt: string) => void;
  handleAccept: () => void;
}

export function QuestBoxComponent({ quest, handleAccept }: Props) {
  const [expended, setExpended] = useState<boolean>(false);
  return (
    <div className={css.questbox}>
      <div onClick={() => setExpended((x) => !x)}>
        {/* <p>{quest.Requester?.ID}</p> */}
        <p>{quest.title}</p>
        <p>{quest.description}</p>
        {/* <p>Create: {quest.CreatedAt}</p> */}
        {/* <p>Expored: {quest.Expired}</p> */}
        <div>
          {quest.brawn_participants?.map((item: BrawnParticipant, index) => (
            <a key={'user_' + index}>{item.user}</a>
          ))}
        </div>
        <p>
          {quest.brawn_participants?.length}/{quest.max_participants}
        </p>
        {/* {quest.?.map((tag, tagindex) => {
          return (
            <div key={"tag_" + tagindex}>{tag}</div>
          );
        })} */}
        <p>{quest.status}</p>
      </div>
      {expended && (
        <div>
          {quest.status ? (
            <button onClick={handleAccept}>Accpet</button>
          ) : (
            <div>This quest is finished.</div>
          )}
          <ol>
            {quest.brawn_participants?.map((item: BrawnParticipant, index) => (
              <div key={index}>
                <p>{item.user}</p>
                <p>{item.quest}</p>
              </div>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
