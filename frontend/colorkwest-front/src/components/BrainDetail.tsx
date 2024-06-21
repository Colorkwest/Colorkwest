import { Box, TextField, Typography } from '@mui/material';
import { DetailedQuest } from '../generated/dto';
import AddIcon from '@mui/icons-material/Add';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  useAnswerBrainQuestsQuestIdAnswerPost,
  useToggleFavoriteAnswerQuestIdTogglePost,
} from '../generated/api/default/default';
import { BrainAnswer } from '../generated/dto/brainAnswer';
import { MY_USER_ID } from '../App';
import { useQuestContext } from '../useQuestContext';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import dayjs from 'dayjs';
import { UserDisplayRow } from './UserDisplayRow';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

interface BrainDetailProps {
  quest: DetailedQuest;
}

export function BrainDetail({ quest }: BrainDetailProps) {
  const { trigger: submit } = useAnswerBrainQuestsQuestIdAnswerPost(quest.id);
  const { trigger: toggleFavorite } = useToggleFavoriteAnswerQuestIdTogglePost(quest.id);
  const { refetchQuests } = useQuestContext();
  const [answerText, setAnswerText] = useState('');

  const isAdmin = quest.author == MY_USER_ID;

  const submitLike = useCallback(
    (author_id: number) => {
      if (!isAdmin || author_id == MY_USER_ID) return;

      toggleFavorite({ author: author_id });
      refetchQuests();
    },
    [submit, refetchQuests, answerText, quest],
  );

  const submitAnswer = useCallback(() => {
    const answer: BrainAnswer = {
      accepted: false,
      author: MY_USER_ID,
      quest: quest.id,
      text: answerText,
      created_at: dayjs().toISOString(),
    };
    submit(answer);
    refetchQuests();
  }, [submit, refetchQuests, answerText, quest]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        submitAnswer();
      }
    };
    window.addEventListener('keydown', handleKeyDown, false);
    return () => window.removeEventListener('keydown', handleKeyDown, false);
  }, [submitAnswer]);

  const answerRows = useMemo(() => {
    const n = quest.brain_answers.length;
    return (
      <>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            padding: '12px 0px',
            marginTop: 0,
            position: 'sticky',
            zIndex: 99,
            top: 80,
            backgroundColor: 'white',
          }}
        >
          {n.toString() + (n == 1 ? ' Answer' : ' Answers')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {quest.brain_answers.map((answer, idx) => {
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
                  user={answer.author}
                  date={`Replied at ${dayjs(answer.created_at)
                    .toDate()
                    .toLocaleDateString()} ${dayjs(answer.created_at)
                    .toDate()
                    .toLocaleTimeString()}`}
                  text={answer.text}
                />
                <Box
                  onClick={() => {
                    submitLike(answer.author);
                  }}
                  sx={{
                    display: 'flex',
                    cursor: isAdmin ? 'pointer' : 'none',
                  }}
                >
                  {answer.accepted ? (
                    <ThumbUpIcon color={'secondary'} />
                  ) : isAdmin ? (
                    <ThumbUpAltOutlinedIcon color={'secondary'} />
                  ) : (
                    <Box sx={{ color: 'white' }}>
                      <ThumbUpIcon color={'inherit'} />
                    </Box>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      </>
    );
  }, [quest]);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 99,
          backgroundColor: 'white',
          padding: '24px 0px',
        }}
      >
        <Typography color="text.secondary">
          <AddIcon />
        </Typography>
        <TextField
          label="Type your answer"
          size="small"
          fullWidth
          value={answerText}
          onChange={(e) => {
            setAnswerText(e.target.value);
          }}
          color={'secondary'}
          InputProps={{
            style: {
              borderRadius: '71px',
            },
          }}
        />
      </Box>
      <Box>{answerRows}</Box>
    </Box>
  );
}
