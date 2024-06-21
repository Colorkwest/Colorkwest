import { useGetQuestsQuestsGet, useGetUsersUsersGet } from '../generated/api/default/default';
import { Box } from '@mui/material';
import { ProfileComponent } from './ProfileComponent';
import { Masonry } from '@mui/lab';
import { QuestPost } from './QuestPost';
import { useEffect, useMemo, useState } from 'react';
import { DetailedQuest } from '../generated/dto';
import { UserAvatar } from './UserAvatar';
import { MY_USER_ID } from '../App';
import { QuestContext } from '../useQuestContext';
import { StatDisplay } from './StatDisplay';
import { NewQuestModalComponent } from './NewQuestComponent';

type QuestBoardProps = {
  selectedTab: number;
};

export function QuestBoard({ selectedTab }: QuestBoardProps) {
  const { data: questData, mutate: refetchQuestData } = useGetQuestsQuestsGet();
  const { data: users } = useGetUsersUsersGet();
  const [filteredQuests, setFilteredQuests] = useState<DetailedQuest[]>([]);

  const [selectedUserID, setSelectedUserID] = useState<number | null>(null);
  const [loginedUserID, setLoginUserID] = useState<number>(1);

  useEffect(() => {
    if (!questData) setFilteredQuests([]);

    setFilteredQuests(
      questData?.filter((quest) => {
        switch (selectedTab) {
          case 0: // All Quests
            return true;
          case 1: // My Tasks
            const brawn = quest.brawn_participants.find((p) => p.user == MY_USER_ID);
            const brain = quest.brain_answers.find((a) => a.author == MY_USER_ID);
            return brawn || brain;
          case 2: // My Requests
            return quest.author == MY_USER_ID;
        }
      }) || [],
    );
  }, [questData, selectedTab]);

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

  const questDisplay = useMemo(() => {
    return filteredQuests.map((quest) => (
      <QuestPost
        avatarClick={() => {
          setSelectedUserID(quest.author);
        }}
        key={quest.id}
        quest={quest}
        users={users}
        shrinkPrevious={shrinkPrevious}
        setShrinkPrevious={setShrinkPrevious}
      />
    ));
  }, [filteredQuests]);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          right: '20px',
          top: '20px',
        }}
        onClick={() => setSelectedUserID(loginedUserID)}
      >
        <UserAvatar user_id={loginedUserID} />
      </Box>
      {selectedUserID && (
        <Box
          onClick={() => {
            setSelectedUserID(null);
          }}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
        >
          <ProfileComponent userID={selectedUserID} />
        </Box>
      )}
      <QuestContext.Provider value={{ quests: questData, refetchQuests: refetchQuestData }}>
        <Box
          sx={{
            paddingY: 4,
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100% - 48px)',
            position: 'relative',
          }}
        >
          <Masonry columns={3} spacing={2} sequential>
            {questDisplay}
          </Masonry>
          <Box width={600} height={600}>
            <StatDisplay str={10} cha={10} int={20} dex={40} />
          </Box>
        </Box>
        <NewQuestModalComponent onCreate={refetchQuestData}/>
      </QuestContext.Provider>
    </>
  );
}
