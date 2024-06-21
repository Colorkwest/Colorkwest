import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TabSelector } from './components/TabSelector.tsx';
import { QuestBoard } from './components/QuestBoard.tsx';
import { Typography } from '@mui/material';

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
      text: {
        secondary: '#9A9A9A',
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
      <QuestBoard selectedTab={selectedTab} />
    </ThemeProvider>
  );
}

export default App;
