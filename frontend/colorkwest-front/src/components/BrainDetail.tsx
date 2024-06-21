import { Box, TextField, Typography } from '@mui/material';
import { DetailedQuest } from '../generated/dto';
import AddIcon from '@mui/icons-material/Add';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAnswerBrainQuestsQuestIdAnswerPost } from '../generated/api/default/default';
import { BrainAnswer } from '../generated/dto/brainAnswer';
import { MY_USER_ID } from '../App';
import { useQuestContext } from '../useQuestContext';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

interface BrainDetailProps {
  quest: DetailedQuest;
}

export function BrainDetail({ quest }: BrainDetailProps) {
  const { trigger: submit } = useAnswerBrainQuestsQuestIdAnswerPost(quest.id);
  const { refetchQuests } = useQuestContext();
  const [answerText, setAnswerText] = useState('');

  const submitAnswer = useCallback(() => {
    const answer: BrainAnswer = {
      accepted: false,
      author: MY_USER_ID,
      quest: quest.id,
      text: answerText,
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
    console.log(n);
    return (
      <>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            padding: 1,
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
          {quest.brain_answers.map((answer, idx) => (
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  padding: 1,
                  borderRadius: '10px',
                  border: '1px solid var(--Border, rgba(214, 214, 214, 1))',
                  key: idx,
                  flexGrow: 1,
                }}
              >
                {answer.text}
              </Box>
              <Box
                sx={{
                  paddingX: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ThumbUpIcon color="secondary" />
              </Box>
            </Box>
          ))}
        </Box>
      </>
    );
  }, [quest]);

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
