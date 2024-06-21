import { useGetQuestsQuestsGet, useGetUsersUsersGet } from '../generated/api/default/default';
import { Box } from '@mui/material';
import { StatDisplay } from './StatDisplay';
import { Masonry } from '@mui/lab';
import { QuestPost } from './QuestPost';
import { useEffect, useState } from 'react';
import { DetailedQuest } from '../generated/dto';

type QuestBoardProps = {
  selectedTab: number;
};

const MY_USER_ID = 2;

export function QuestBoard({ selectedTab }: QuestBoardProps) {
  const { data: quests } = useGetQuestsQuestsGet();
  const { data: users } = useGetUsersUsersGet();
  const [filteredQuests, setFilteredQuests] = useState<DetailedQuest[]>([]);

  useEffect(() => {
    if (!quests) setFilteredQuests([]);

    setFilteredQuests(
      quests?.filter((quest) => {
        switch (selectedTab) {
          case 0: // All Quests
            return true;
            break;
          case 1: // My Tasks
            const brawn = quest.brawn_participants.find((p) => p.user == MY_USER_ID);
            const brain = quest.brain_answers.find((a) => a.author == MY_USER_ID);
            return brawn || brain;
            break;
          case 2: // My Requests
            return quest.author == MY_USER_ID;
            break;
        }
      }) || [],
    );
  }, [quests, selectedTab]);

  const [shrinkPrevious, setShrinkPrevious] = useState(() => {
    return () => {};
  });

  // Escape key to unfocus quest
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        shrinkPrevious();
        setShrinkPrevious(() => {
          return () => {};
        });
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [shrinkPrevious, setShrinkPrevious]);

  return (
    <Box
      sx={{
        paddingY: 4,
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 48px)',
        position: 'relative',
      }}
    >
      <Masonry columns={3} spacing={2}>
        {filteredQuests.map((quest) => (
          <QuestPost
            key={quest.id}
            quest={quest}
            users={users}
            shrinkPrevious={shrinkPrevious}
            setShrinkPrevious={setShrinkPrevious}
          />
        ))}
      </Masonry>
      <Box width={600} height={600}>
        <StatDisplay str={10} cha={10} int={20} dex={40} />
      </Box>
    </Box>
  );
}
