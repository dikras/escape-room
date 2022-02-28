import { createReducer } from '@reduxjs/toolkit';
import { loadQuests, loadQuest, loadUndoQuest } from 'store/action';

const initialState = {
  quests: [],
  quest: null,
  isDataLoaded: false,
  isQuestLoading: false,
};

const questsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadUndoQuest, (state) => {
      state.isQuestLoading = true;
    })
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
      state.isQuestLoading = false;
    });
});

export {questsReducer};
