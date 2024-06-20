import './App.css';
import { useGetQuestsQuestsGet, useGetUsersUsersGet } from './generated/api/default/default';
import { QuestBoxComponent } from './components/QuestBoxComponent.tsx';
import { QuestionBoxComponent } from './components/QuestionBoxComponent.tsx';
import { UserProfileComponent } from './components/UserProfileComponent.tsx';
import { NewQuestModalComponent } from './components/NewQuestComponent.tsx';
import { useState } from 'react';

function App() {
  const quests = useGetQuestsQuestsGet();
  const users = useGetUsersUsersGet();
  const [newQuestModalOpen, setNewQuestionModalOpen] = useState<boolean>(false);
  console.log(users);

  const handleAnswer = (answer: string) => {
    alert(answer);
  }

  const handleAccept = () => {
    alert('accept');
  }

  const handleSubmit = (data) => {

  }

  return (
    <>
      <h1>Colorkwest</h1>
      {quests?.data?.map((item) => {
        if (item.type == 1) {
          return (
            <div key={item.id}>
              <QuestionBoxComponent quest={item} handleAnswer={handleAnswer} />
            </div>)
        }
        else return (
          <div key={item.id}>
            <QuestBoxComponent quest={item} handleAccept={handleAccept} />
          </div>
        )
      })}
      {users?.data &&
        <UserProfileComponent user={users?.data?.[1]} />
      }
      <button onClick={() => setNewQuestionModalOpen(x => !x)}>++++++</button>
      {newQuestModalOpen && (
        <NewQuestModalComponent handleSubmit={handleSubmit} />
      )}
    </>
  );
}

export default App;
