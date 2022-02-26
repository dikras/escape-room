import { combineReducers } from 'redux';
import { questsReducer } from './quests-reducer/quests-reducer';
import { appReducer } from './app-reducer/app-reducer';

export const NameSpace = {
  app: 'APP',
  data: 'DATA',
};

export const rootReducer = combineReducers({
  [NameSpace.app]: appReducer,
  [NameSpace.data]: questsReducer,
});
