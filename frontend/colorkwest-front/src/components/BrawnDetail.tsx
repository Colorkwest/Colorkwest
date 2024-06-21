import { useMemo } from 'react';
import { DetailedQuest } from '../generated/dto';
import { Box, Typography } from '@mui/material';
import { UserDisplayRow } from './UserDisplayRow';

interface BrawnDetailProps {
  quest: DetailedQuest;
}

export function BrawnDetail({ quest }: BrawnDetailProps) {
  const participantRows = useMemo(() => {
    const n = quest.brawn_participants.length;
    return (
      <>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            padding: 1,
          }}
        >
          {n.toString() + (n == 1 ? ' Participant' : ' Participants')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {quest.brawn_participants.map((participant, idx) => {
            return (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <UserDisplayRow
                  user={participant.user}
                  date={`Accepted at ${'put date here'}`}
                  text={null}
                />
              </Box>
            );
          })}
        </Box>
      </>
    );
  }, [quest]);

  return (
    <Box sx={{ paddingY: 2 }}>
      <Box>{participantRows}</Box>
    </Box>
  );
}
