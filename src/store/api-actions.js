import { APIRoute, UploadMessage } from 'const';
import { loadQuests, loadQuest, loadQuestError, loadUndoQuest } from './action';
import { adaptQuestToClient } from 'utils';
import { toast } from 'react-toastify';

const BACKEND_URL = 'http://localhost:3001';

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

export const uploadOrder = (order) =>
  async (_getState, api) => {
    try {
      await api.post(APIRoute.Orders, order);
      toast.success(UploadMessage.OrderUploadSuccess);
    }
    catch {
      toast.warn(UploadMessage.OrderUploadFail);
    }
  };

/* export async function uploadOrder(order) {
  try {
    await fetch(BACKEND_URL + APIRoute.Orders, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(async function uploadOrder(order) {
      }),
    });
    toast.success(WarningMessage.OrderPostSuccess)
  }
  catch {
    toast.error(WarningMessage.OrderPostFail)
  }
} */

