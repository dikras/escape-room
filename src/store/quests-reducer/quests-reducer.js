import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadQuest } from 'store/action';

const initialState = {
  quests: [],
  quest: null,
  isDataLoaded: false,
};

const questsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
    });
});

export {questsReducer};
