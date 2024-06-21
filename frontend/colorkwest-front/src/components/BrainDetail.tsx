import { Box, TextField, Typography } from '@mui/material';
import { DetailedQuest } from '../generated/dto';
import AddIcon from '@mui/icons-material/Add';

interface BrainDetailProps {
  quest: DetailedQuest;
}

export function BrainDetail({ quest }: BrainDetailProps) {
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
