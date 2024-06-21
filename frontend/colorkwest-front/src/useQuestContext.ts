import { createContext, useContext } from 'react';
import { DetailedQuest } from './generated/dto';

interface QuestContextInterface {
  quests: DetailedQuest[] | undefined;
  refetchQuests: () => void;
}

export const QuestContext = createContext<QuestContextInterface>({
  quests: [],
  refetchQuests: () => {},
});

export const useQuestContext = (): QuestContextInterface => {
  return useContext(QuestContext);
};
