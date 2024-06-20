import { useState } from 'react';
import { useGetQuestsQuestsGet, useGetUsersUsersGet } from '../generated/api/default/default';
import { Box } from '@mui/material';
import { StatDisplay } from './StatDisplay';
import { NewQuestModalComponent } from './NewQuestComponent';
import { UserProfileComponent } from './UserProfileComponent';
import { QuestBoxComponent } from './QuestBoxComponent';
import { QuestionBoxComponent } from './QuestionBoxComponent';
import { Masonry } from '@mui/lab';

type QuestBoardProps = {
  selectedTab: number;
};

export function QuestBoard({ selectedTab }: QuestBoardProps) {
  const quests = useGetQuestsQuestsGet();
  const users = useGetUsersUsersGet();
  const [newQuestModalOpen, setNewQuestionModalOpen] = useState<boolean>(false);

  return (
    <Masonry columns={3} spacing={2}>
      {quests?.data?.map((item) => {
        if (item.type == 1) {
          return (
            <div key={item.id}>
              <QuestionBoxComponent quest={item} handleAnswer={() => {}} />
            </div>
          );
        } else
          return (
            <div key={item.id}>
              <QuestBoxComponent quest={item} handleAccept={() => {}} />
            </div>
          );
      })}
      {users?.data && <UserProfileComponent user={users?.data?.[1]} />}
      <button onClick={() => setNewQuestionModalOpen((x) => !x)}>+</button>
      {newQuestModalOpen && <NewQuestModalComponent handleSubmit={() => {}} />}
      <Box width={600} height={600}>
        <StatDisplay str={10} cha={10} int={20} dex={40} />
      </Box>
    </Masonry>
  );
}
