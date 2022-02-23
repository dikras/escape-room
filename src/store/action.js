import { ActionType } from "const";

export const changeQuestType = (questType) => ({
  type: ActionType.ChangeQuestType,
  payload: questType,
});

export const createQuestsList = (quests) => ({
  type: ActionType.CreateQuestsList,
  payload: quests,
});
