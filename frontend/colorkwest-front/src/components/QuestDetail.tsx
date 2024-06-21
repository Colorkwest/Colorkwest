import { QuestTypeEnum } from '../enums';
import { DetailedQuest } from '../generated/dto';
import { BrainDetail } from './BrainDetail';
import { BrawnDetail } from './BrawnDetail';

interface QuestDetailProps {
  quest: DetailedQuest;
}

export function QuestDetail({ quest }: QuestDetailProps) {
  if (quest.type == QuestTypeEnum.BRAIN) {
    return <BrainDetail quest={quest} />;
  } else if (quest.type == QuestTypeEnum.BRAWN) {
    return <BrawnDetail quest={quest} />;
  }
  return <></>;
}
