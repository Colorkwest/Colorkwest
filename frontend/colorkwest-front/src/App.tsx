import { useState } from 'react';
import { Box } from '@mui/material';
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
      <Box sx={{ textAlign: 'center' }}>
        <h1>Colorkwest</h1>
      </Box>
      <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <QuestBoard selectedTab={selectedTab} />
    </ThemeProvider>
  );
}

export default App;
