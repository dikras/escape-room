import { APIRoute, WarningMessage } from 'const';
import { loadQuests, loadQuest, loadQuestError } from './action';
import { adaptQuestToClient } from 'utils';
import { toast } from 'react-toastify';

export const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.Quests);
    dispatch(loadQuests(data.map((quest) => adaptQuestToClient(quest))));
};

export const fetchQuestAction = (id) =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${APIRoute.Quests}/${id}`);
      dispatch(loadQuest(adaptQuestToClient(data)));
    } catch {
      dispatch(loadQuestError());
    }
};

export const uploadOrder = ({ name, peopleCount, phone, isLegal }) =>
  async (_getState, api) => {
    try {
      await api.post(APIRoute.Orders, {name, peopleCount, phone, isLegal});
    }
    catch {
      toast.warn(WarningMessage.OrderPostFail);
    }
  };

