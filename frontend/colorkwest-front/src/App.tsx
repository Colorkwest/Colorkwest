import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TabSelector } from './components/TabSelector.tsx';
import { QuestBoard } from './components/QuestBoard.tsx';
import { Box } from '@mui/material';

export const MY_USER_ID = 1;

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

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
      <Box sx={{ display: 'flex', width: '100%', paddingY: 2, justifyContent: 'center' }}>
        <img src={'src/assets/colorkwest.svg'} />
      </Box>

      <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <QuestBoard selectedTab={selectedTab} />
    </ThemeProvider>
  );
}

export default App;
