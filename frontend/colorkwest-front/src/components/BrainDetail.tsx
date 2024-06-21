import { Box, TextField, Typography } from '@mui/material';
import { DetailedQuest } from '../generated/dto';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';

interface BrainDetailProps {
  quest: DetailedQuest;
}

export function BrainDetail({ quest }: BrainDetailProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        console.log('yay');
      }
    };
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Box sx={{ paddingY: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography color="text.secondary">
          <AddIcon />
        </Typography>
        <TextField
          label="Type your answer"
          size="small"
          fullWidth
          color={'secondary'}
          InputProps={{
            style: {
              borderRadius: '71px',
            },
          }}
        />
      </Box>
    </Box>
  );
}
