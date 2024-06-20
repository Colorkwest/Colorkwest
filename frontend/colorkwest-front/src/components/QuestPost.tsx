import { Box, Stack, Typography } from '@mui/material';
import { GetUsersUsersGet200 } from '../generated/dto';
import { DetailedQuest } from '../generated/dto/detailedQuest';
import { useCallback, useState } from 'react';
import { TraitChip } from './TraitChip';
import { UserAvatar } from './UserAvatar';

interface QuestPostProps {
  quest: DetailedQuest;
  users?: GetUsersUsersGet200;
  shrinkPrevious: () => void;
  setShrinkPrevious: React.Dispatch<React.SetStateAction<() => void>>;
}

export function QuestPost({ quest, users, shrinkPrevious, setShrinkPrevious }: QuestPostProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [inputAnswer, setInputAnswer] = useState<string>('');

  const handleClick = useCallback(() => {
    if (expanded) {
      return;
    }

    setShrinkPrevious(() => {
      return () => setExpanded(false);
    });
    shrinkPrevious();
    setExpanded(true);
  }, [expanded, setShrinkPrevious, setExpanded, shrinkPrevious, setExpanded]);

  return (
    <Box
      onClick={handleClick}
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
          <TraitChip name="Cat" />
          <TraitChip name="Pet" />
        </Stack>
        <Typography color="text.secondary">{quest.description}</Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          <Typography>
            {quest.brain_answers?.length}/{quest.max_participants} participants
          </Typography>
        </Box>
      </Box>
      {expanded && <> PUT QUEST POST DETAIL COMPONENT HERE</>}
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
