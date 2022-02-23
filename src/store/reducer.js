import { QuestType, ActionType } from 'const';

export const initialState = {
  currentQuestType: QuestType.AllQuests.type,
  quests: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ChangeQuestType:
      return {...state, currentQuestType: action.payload};
    case ActionType.CreateQuestsList:
      return {...state, quests: action.payload};
    default:
      return state;
  }
};

export {reducer};
