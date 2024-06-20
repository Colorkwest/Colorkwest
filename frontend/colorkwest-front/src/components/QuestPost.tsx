import { Box, Chip, Typography } from '@mui/material';
import { BrainAnswer, GetUsersUsersGet200 } from '../generated/dto';
import { DetailedQuest } from '../generated/dto/detailedQuest';
import { useState } from 'react';

interface QuestPostProps {
  quest: DetailedQuest;
  users?: GetUsersUsersGet200;
  handleAnswer: (txt: string) => void;
}

export function QuestPost({ quest, users, handleAnswer }: QuestPostProps) {
  const [expended, setExpended] = useState<boolean>(false);
  const [inputAnswer, setInputAnswer] = useState<string>('');

  return (
    <Box
      sx={{
        margin: '50px 15px',
        background: 'white',
        padding: '20px',
        gap: '15px',
        borderRadius: '10px',
      }}
    >
      <div onClick={() => setExpended((x) => !x)}>
        <Typography>{quest.title}</Typography>
        <Typography>{quest.description}</Typography>
        <div>
          {quest.brain_answers?.map((item: BrainAnswer, index) => (
            <a key={'user_' + index}>{item.author}</a>
          ))}
        </div>
        <p>
          {quest.brain_answers?.length}/{quest.max_participants}
        </p>
        {/* {quest.Tags?.map((tag, tagindex) => {
          return (
            <Box>
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
            </Box>
          );
        })} */}
        <p>{quest.status}</p>
      </div>
      {expended && (
        <div>
          {quest.status ? (
            <div>
              <input
                type="text"
                placeholder="please inpu your answer"
                value={inputAnswer}
                onChange={(e) => {
                  setInputAnswer(e.target.value);
                }}
              />
              <button onClick={() => handleAnswer(inputAnswer)}>Answer</button>
            </div>
          ) : (
            <div>This answer is closed.</div>
          )}
          <ol>
            {quest.brain_answers?.map((item: BrainAnswer, index) => (
              <div key={index}>
                <p>{item.accepted}</p>
                <p>{item.author}</p>
                <p>{item.accepted}</p>
                <p>{item.accepted}</p>
              </div>
            ))}
          </ol>
        </div>
      )}
    </Box>
  );
}
