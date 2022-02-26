import { NameSpace } from 'store/root-reducer';

export const getCurrentQuestType = (state) => state[NameSpace.app].currentQuestType;
