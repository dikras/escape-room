import { APIRoute, UploadMessage, BACKEND_URL } from 'const';
import { loadQuests, loadQuest, loadQuestError, loadUndoQuest } from './action';
import { adaptQuestToClient } from 'utils';
import { toast } from 'react-toastify';

export const fetchQuestsAction = () =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get(APIRoute.Quests);
    dispatch(loadQuests(data.map((quest) => adaptQuestToClient(quest))));
};

export const fetchQuestAction = (id) =>
  async (dispatch, _getState, api) => {
    dispatch(loadUndoQuest());
    try {
      const {data} = await api.get(`${APIRoute.Quests}/${id}`);
      dispatch(loadQuest(adaptQuestToClient(data)));
    } catch {
      dispatch(loadQuestError());
    }
};

export async function uploadOrder(order) {
  try {
    await fetch(BACKEND_URL + APIRoute.Orders, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(order),
    });
    toast.success(UploadMessage.OrderUploadSuccess);
  }
  catch {
    toast.error(UploadMessage.OrderUploadFail);
  }
}

