import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TabSelector } from './components/TabSelector.tsx';
import { QuestBoard } from './components/QuestBoard.tsx';
import { Box, Typography } from '@mui/material';
import { NewQuestModalComponent } from './components/NewQuestComponent.tsx';
import { LeaderBoardComponent } from './components/LeaderBoardComponent.tsx';

export const MY_USER_ID = 2;

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [leaderOn, setLeaderOn] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#006FFD',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#EC9007',
        contrastText: '#FFFFFF',
      },
      text: {
        secondary: '#9A9A9A',
      },
      success: {
        main: '#EC9007',
        contrastText: '#FFFFFF',
      },
      error: {
        main: '#006FFD',
        contrastText: '#FFFFFF',
      },
      info: {
        main: '#000000',
        contrastText: '#FFFFFF',
      },
      warning: {
        main: '#ECECEC',
        contrastText: '#000000',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Typography
        sx={{
          fontSize: '26px',
          fontWeight: 800,
          textAlign: 'center',
          paddingTop: 4,
        }}
      >
        Colorkwest
      </Typography>
      <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Box>
        <QuestBoard selectedTab={selectedTab} />
      </Box>
      {leaderOn && <LeaderBoardComponent handleClose={() => setLeaderOn(false)} />}
      <NewQuestModalComponent />
    </ThemeProvider>
  );
}

export default App;
