import { useGetQuestsQuestsGet, useGetUsersUsersGet } from './generated/api/default/default';
import { QuestBoxComponent } from './components/QuestBoxComponent.tsx';
import { QuestionBoxComponent } from './components/QuestionBoxComponent.tsx';
import { UserProfileComponent } from './components/UserProfileComponent.tsx';
import { NewQuestModalComponent } from './components/NewQuestComponent.tsx';
import { useState } from 'react';
import { StatDisplay } from './components/StatDisplay.tsx';
import { Box, Tab, Tabs } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const quests = useGetQuestsQuestsGet();
  const users = useGetUsersUsersGet();
  const [newQuestModalOpen, setNewQuestionModalOpen] = useState<boolean>(false);

  const handleAnswer = (answer: string) => {
    alert(answer);
  };

  const handleAccept = () => {
    alert('accept');
  };

  const [selectedTab, setSelectedTab] = useState(0);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#006FFD',
      },
      secondary: {
        main: '#EC9007',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ textAlign: 'center' }}>
        <h1>Colorkwest</h1>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          aria-label="basic tabs example"
          textColor="inherit"
          indicatorColor="primary"
          centered
          sx={{ '& .Mui-selected': { fontWeight: 800 } }}
        >
          <Tab disableRipple label="All Quests" />
          <Tab disableRipple label="My Tasks" />
          <Tab disableRipple label="My Requests" />
        </Tabs>
      </Box>
      {quests?.data?.map((item) => {
        if (item.type == 1) {
          return (
            <div key={item.id}>
              <QuestionBoxComponent quest={item} handleAnswer={handleAnswer} />
            </div>
          );
        } else
          return (
            <div key={item.id}>
              <QuestBoxComponent quest={item} handleAccept={handleAccept} />
            </div>
          );
      })}
      {users?.data && <UserProfileComponent user={users?.data?.[1]} />}
      <button onClick={() => setNewQuestionModalOpen((x) => !x)}>++++++</button>
      {newQuestModalOpen && <NewQuestModalComponent handleSubmit={handleSubmit} />}
      <Box width={600} height={600}>
        <StatDisplay str={10} cha={10} int={20} dex={40} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
