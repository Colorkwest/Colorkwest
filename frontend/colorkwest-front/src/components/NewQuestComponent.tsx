// import css from './IndexPage.module.css';
import { useState, useEffect } from 'react';

// interface Quest {
//   Title: string;
//   Description: string;
//   Expired: string;
//   CreatedAt: string;
//   Requester: string;
//   Catagory: string,
//   Status: string,
//   Participantes: Array<string>,
//   Limit: number,
//   Answers: Array<string>,
//   Tags: Array<string>,
// }

interface newQuestion {
  Title: string;
  Description: string;
  Expired: string;
  Hardness: string;
  // Requirement: Array<string>,
  UUID: string;
  Category: string;
  Award: number;
  Limit: number; // number of get award
  Tag: Array<string>;
}

interface Props {
  // quest: NewQuestion;
  handleSubmit: (data: newQuestion) => void;
  // handleAccept: () => void;
}

export function NewQuestModalComponent({ handleSubmit }: Props) {
  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputDescription, setInputDescription] = useState<string>('');
  const [inputExpired, setInputExpired] = useState<string>('');
  const [inputHardness, setInputHardness] = useState<string>('');
  // const [inputRequirement,setInputRequirement]= useState<Array<number>>([])
  const [inputUUID, setInputUUID] = useState<string>('');
  const [inputCategory, setInputCategory] = useState<string>('');
  const [inputAward, setInputAward] = useState<number>(0);
  const [inputLimit, setInputLimit] = useState<number>(0);
  const [inputTag, setInputTag] = useState<Array<string>>([]);

  return (
    <div>
      <input
        type="text"
        placeholder="please input Title"
        value={inputTitle}
        onChange={(e) => {
          setInputTitle(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="please intput Description"
        value={inputDescription}
        onChange={(e) => {
          setInputDescription(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="please input Expired"
        value={inputExpired}
        onChange={(e) => {
          setInputExpired(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="please input Hardness"
        value={inputHardness}
        onChange={(e) => {
          setInputHardness(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="please input UUID"
        value={inputUUID}
        onChange={(e) => {
          setInputUUID(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="please input Category"
        value={inputCategory}
        onChange={(e) => {
          setInputCategory(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="please input Award"
        value={inputAward}
        onChange={(e) => {
          setInputAward(Number(e.target.value));
        }}
      ></input>
      <input
        type="number"
        placeholder="please input Limit"
        value={inputTitle}
        onChange={(e) => {
          setInputLimit(Number(e.target.value));
        }}
      ></input>
      <input
        type="text"
        placeholder="please input Tag"
        value={inputTitle}
        onChange={(e) => {
          setInputTag(Array<string>(e.target.value));
        }}
      ></input>

      <button
        onClick={() =>
          handleSubmit({
            Title: inputTitle,
            Description: inputDescription,
            Expired: inputExpired,
            Hardness: inputHardness,
            // Requirement: inputRequirement,
            UUID: inputUUID,
            Category: inputCategory,
            Award: inputAward,
            Limit: inputLimit, // number of get award
            Tag: inputTag,
          })
        }
      >
        Submit
      </button>
    </div>
  );

  // return (
  //   <div className={css.questbox}>
  //     <div onClick={() => setExpended(x => !x)}>
  //       <p>{quest.Requester?.ID}</p>
  //       <p>{quest.Title}</p>
  //       <p>{quest.Description}</p>
  //       <p>Create: {quest.CreatedAt}</p>
  //       <p>Expored: {quest.Expired}</p>
  //       <div>
  //         {quest.Participantes?.map((user, userindex) =>
  //           <a key={"user_" + userindex}>1{userindex}-{user.ID}</a>
  //         )}
  //       </div>
  //       <p>{quest.Participantes?.length}/{quest.Limit}</p>
  //       {quest.Tags?.map((tag, tagindex) => {
  //         return (
  //           <div key={"tag_" + tagindex}>{tag}</div>
  //         );
  //       })}
  //       <p>{quest.Status}</p>
  //     </div>
  //     {
  //       expended && (
  //         <div>
  //           {quest.Catagory === "Quest" ? (
  //             <>
  //               {quest.Status != "Done" ? (<button onClick={handleAccept}>Accpet</button>) : (<div>This quest is finished.</div>)}
  //             </>
  //           ) : (
  //             <>
  //               {quest.Status != "Done" ? (
  //                 <div>
  //                   <input type="text" placeholder='please inpu your answer' value={inputAnswer} onChange={(e) => { setInputAnswer(e.target.value) }}></input>
  //                   <button onClick={() => handleAnswer(inputAnswer)}>Answer</button>
  //                 </div>) : (
  //                 <div>This answer is closed.</div>
  //               )
  //               }
  //               <ol>
  //                 {quest.Answers?.map((item2, index) =>
  //                   <p key={index}>{item2}</p>
  //                 )}
  //               </ol>
  //             </>
  //           )}
  //         </div>
  //       )
  //     }
  //   </div >
  // );
}
