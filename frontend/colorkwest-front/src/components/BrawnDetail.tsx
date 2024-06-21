import { useCallback, useMemo } from 'react';
import { BrawnParticipant, DetailedQuest } from '../generated/dto';
import { Box, Button, Typography } from '@mui/material';
import { UserDisplayRow } from './UserDisplayRow';
import dayjs from 'dayjs';
import { MY_USER_ID } from '../App';
import { useParticipiateBrawnQuestsQuestIdParticipatePost } from '../generated/api/default/default';
import { useQuestContext } from '../useQuestContext';

interface BrawnDetailProps {
  quest: DetailedQuest;
}

export function BrawnDetail({ quest }: BrawnDetailProps) {
  const { trigger: submit } = useParticipiateBrawnQuestsQuestIdParticipatePost(quest.id);
  const { refetchQuests } = useQuestContext();
  const participating = useMemo(() => {
    return !!quest.brawn_participants.find((p) => p.user === MY_USER_ID);
  }, [quest]);

  const acceptTask = useCallback(() => {
    const answer: BrawnParticipant = {
      quest: quest.id,
      user: MY_USER_ID,
      created_at: dayjs().toISOString(),
    };
    submit(answer).then(() => {
      refetchQuests();
    });
  }, [submit, refetchQuests, quest]);

  const acceptTaskButton = (
    <Box
      sx={{
        color: '#303640',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        sx={{ borderRadius: '52px' }}
        color="inherit"
        variant="outlined"
        onClick={(e) => {
          e.stopPropagation();
          acceptTask();
        }}
      >
        ACCEPT TASK
      </Button>
    </Box>
  );

  const participantRows = useMemo(() => {
    const n = quest.brawn_participants.length;
    return (
      <>
        {!participating && acceptTaskButton}
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
                  date={`Accepted at ${dayjs(participant.created_at)
                    .toDate()
                    .toLocaleDateString()} ${dayjs(participant.created_at)
                    .toDate()
                    .toLocaleTimeString()}`}
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
