/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * openapi
 * OpenAPI spec version: 3.0.1
 */
import type { BrainAnswer } from './brainAnswer';
import type { BrawnParticipant } from './brawnParticipant';
import type { Status } from './status';
import type { Trait } from './trait';
import type { QuestType } from './questType';

export interface DetailedQuest {
  author: number;
  brain_answers: BrainAnswer[];
  brawn_participants: BrawnParticipant[];
  deadline: string;
  description: string;
  id: number;
  max_participants: number;
  status: Status;
  title: string;
  trait: Trait;
  type: QuestType;
}
