import { useState } from 'react';
import { StatDisplay } from './components/StatDisplay.tsx';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TabSelector } from './components/TabSelector.tsx';
import { QuestBoard } from './components/QuestBoard.tsx';

function App() {
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
      <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <QuestBoard selectedTab={selectedTab} />
    </ThemeProvider>
  );
}

export default App;
