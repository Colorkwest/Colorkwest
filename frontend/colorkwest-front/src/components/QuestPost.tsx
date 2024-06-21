import { Box, Stack, Typography } from '@mui/material';
import { GetUsersUsersGet200 } from '../generated/dto';
import { DetailedQuest } from '../generated/dto/detailedQuest';
import { useCallback, useMemo, useState } from 'react';
import { TraitChip } from './TraitChip';
import { UserAvatar } from './UserAvatar';
import { QuestDetail } from './QuestDetail';

interface QuestPostProps {
  quest: DetailedQuest;
  users?: GetUsersUsersGet200;
  shrinkPrevious: () => void;
  setShrinkPrevious: React.Dispatch<React.SetStateAction<() => void>>;
  avatarClick: (x: number | null) => void;
}

export function QuestPost({ quest, users, shrinkPrevious, setShrinkPrevious, avatarClick }: QuestPostProps) {
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

  const questDetail = useMemo(() => {
    if (!expanded) return null;

    return <QuestDetail quest={quest} />;
  }, [expanded]);

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
          <Box onClick={(e: Event) => {
            e.stopPropagation();
            avatarClick(quest.author)
          }}>
            <UserAvatar user_id={quest.author} />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 800,
                alignContent: 'center',
              }}
            >
              {quest.title}
            </Typography>
            <Box
              sx={{
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: expanded ? 20 : 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              <Typography color="text.secondary">{quest.description}</Typography>
            </Box>
          </Box>
        </Box>
        <Stack direction="row" spacing={1}>
          <TraitChip trait={quest.trait} />
          <TraitChip name="Cat" />
          <TraitChip name="Pet" />
        </Stack>
        <Box sx={{ marginLeft: 'auto' }}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            {quest.brain_answers?.length || 0}
            {quest.max_participants ? '/' + quest.max_participants : ''} participant
            {quest.brain_answers?.length != 1 && 's'}
          </Typography>
        </Box>
      </Box>
      {questDetail}
    </Box>
  );
}
