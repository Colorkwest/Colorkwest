import { Box, TextField, Typography } from '@mui/material';
import { DetailedQuest } from '../generated/dto';
import AddIcon from '@mui/icons-material/Add';
import { useCallback, useEffect, useState } from 'react';
import { useAnswerBrainQuestsQuestIdAnswerPost } from '../generated/api/default/default';
import { BrainAnswer } from '../generated/dto/brainAnswer';
import { MY_USER_ID } from '../App';
import { useQuestContext } from '../useQuestContext';

interface BrainDetailProps {
  quest: DetailedQuest;
}

export function BrainDetail({ quest }: BrainDetailProps) {
  const { trigger: submit } = useAnswerBrainQuestsQuestIdAnswerPost(quest.id);
  const { refetchQuests } = useQuestContext();
  const [answerText, setAnswerText] = useState('');

  const submitAnswer = useCallback(() => {
    console.log(answerText);
    const answer: BrainAnswer = {
      accepted: false,
      author: MY_USER_ID,
      quest: quest.id,
      text: answerText,
    };
    submit(answer);
    refetchQuests();
  }, [submit, refetchQuests, answerText, quest]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      submitAnswer();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);
    return () => window.removeEventListener('keydown', handleKeyDown, false);
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
      <Box>
        {quest.brain_answers.map((answer) => (
          <>{answer.text}</>
        ))}
      </Box>
    </Box>
  );
}
