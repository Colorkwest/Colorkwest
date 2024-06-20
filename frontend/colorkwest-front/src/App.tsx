import './App.css';
import { useGetQuestsQuestsGet, useGetUsersUsersGet } from './generated/api/default/default';
import { QuestBoxComponent } from './components/QuestBoxComponent.tsx';

function App() {
  const quests = useGetQuestsQuestsGet();
  const users = useGetUsersUsersGet();

  console.log(users);

  const handleAnswer = (answer: string) => {
    alert(answer);
  }

  const handleAccept = () => {
    alert('accept');
  }
  return (
    <>
      <h1>Colorkwest</h1>
      <h2>Quests:</h2>
      {quests?.data?.map((item, index) => {
        return (
          <div key={index}>
            <QuestBoxComponent quest={item} handleAccept={handleAccept} handleAnswer={handleAnswer} />
          </div>
        )
      })}
    </>
  );
}

export default App;
