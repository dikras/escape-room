import { ActionType } from 'const';
import { createAction } from '@reduxjs/toolkit';

export const changeQuestType = createAction(
  ActionType.ChangeQuestType,
  (questType) => ({
    payload: questType,
  }),
);

export const loadQuests = createAction(
  ActionType.LoadQuests,
  (quests) => ({
    payload: quests,
  }),
);

export const loadQuest = createAction(
  ActionType.LoadQuest,
  (quest) => ({
    payload: quest,
  }),
);
