import { useGetQuestsQuestsGet, useGetUsersUsersGet } from '../generated/api/default/default';
import { Box } from '@mui/material';
import { StatDisplay } from './StatDisplay';
import { NewQuestModalComponent } from './NewQuestComponent';
import { Masonry } from '@mui/lab';
import { QuestPost } from './QuestPost';

type QuestBoardProps = {
  selectedTab: number;
};

export function QuestBoard({ selectedTab }: QuestBoardProps) {
  const { data: quests } = useGetQuestsQuestsGet();
  const { data: users } = useGetUsersUsersGet();

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
        {(quests || []).map((quest) => (
          <QuestPost key={quest.id} quest={quest} users={users} handleAnswer={() => {}} />
        ))}
      </Masonry>
      <Box width={600} height={600}>
        <StatDisplay str={10} cha={10} int={20} dex={40} />
      </Box>
      <NewQuestModalComponent />
    </Box>
  );
}
