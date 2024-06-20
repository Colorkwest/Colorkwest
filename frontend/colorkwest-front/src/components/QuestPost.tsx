import { Box, Stack, Typography } from '@mui/material';
import { GetUsersUsersGet200 } from '../generated/dto';
import { DetailedQuest } from '../generated/dto/detailedQuest';
import { useState } from 'react';
import { TraitChip } from './TraitChip';
import { UserAvatar } from './UserAvatar';

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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <UserAvatar user_id={quest.author} />
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: 800,
              alignContent: 'center',
            }}
          >
            {quest.title}
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          <TraitChip trait={quest.trait} />
          <TraitChip trait={quest.trait} />
          <TraitChip trait={quest.trait} />
        </Stack>
        <Typography color="text.secondary">{quest.description}</Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          <Typography>
            {quest.brain_answers?.length}/{quest.max_participants} participants
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// {expended && (
//   <div>
//     {quest.status ? (
//       <div>
//         <input
//           type="text"
//           placeholder="please inpu your answer"
//           value={inputAnswer}
//           onChange={(e) => {
//             setInputAnswer(e.target.value);
//           }}
//         />
//         <button onClick={() => handleAnswer(inputAnswer)}>Answer</button>
//       </div>
//     ) : (
//       <div>This answer is closed.</div>
//     )}
//     <ol>
//       {quest.brain_answers?.map((item: BrainAnswer, index) => (
//         <div key={index}>
//           <p>{item.accepted}</p>
//           <p>{item.author}</p>
//           <p>{item.accepted}</p>
//           <p>{item.accepted}</p>
//         </div>
//       ))}
//     </ol>
//   </div>
// )}
