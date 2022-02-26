import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadQuest } from 'store/action';

const initialState = {
  quests: [],
  quest: null,
};

const questsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
    });
});

export {questsReducer};
