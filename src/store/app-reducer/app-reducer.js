import { createReducer } from '@reduxjs/toolkit';
import { changeQuestType } from 'store/action';
import { QuestType } from 'const';

const initialState = {
  currentQuestType: QuestType.AllQuests.type,
};

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeQuestType, (state, action) => {
      state.currentQuestType = action.payload;
    });
});

export {appReducer};
