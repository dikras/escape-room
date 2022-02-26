import { APIRoute } from 'const';
import { loadQuests, loadQuest } from './action';
import { adaptQuestToClient } from 'utils';

export const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.Quests);
    dispatch(loadQuests(data.map((quest) => adaptQuestToClient(quest))));
};

export const fetchQuestAction = (id) =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(`${APIRoute.Quests}/${id}`);
    dispatch(loadQuest(adaptQuestToClient(data)));
};

