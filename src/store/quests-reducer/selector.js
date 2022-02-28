import { NameSpace } from "store/root-reducer";

export const getQuests = (state) => state[NameSpace.data].quests;
export const getQuest = (state) => state[NameSpace.data].quest;
export const getIsDataLoaded = (state) => state[NameSpace.data].isDataLoaded;
