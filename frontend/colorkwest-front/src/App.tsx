import './App.css';
import { useGetQuestsQuestsGet } from './generated/api/default/default';

function App() {
  const quests = useGetQuestsQuestsGet();

  return (
    <>
      <h1>Colorkwest</h1>
      <h2>Quests:</h2>
      {quests?.data?.map((quest) => (
        <div key={quest.id}>{quest.title}</div>
      ))}
    </>
  );
}

export default App;
