import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

export const AppRoute = {
  Home: '/',
  Contacts: '/contacts',
  DetailedQuest: '/detailed-quest/:id',
};

export const ImageSize = {
  Preview: {
    Width: '344',
    Height: '232',
  },
  Cover: {
    Width: '1366',
    Height: '768',
  }
};

export const City = {
  lat: 59.968159,
  lng: 30.316882,
  zoom: 16,
}

export const EscapeRoom = {
  lat: 59.968432,
  lng: 30.317619,
}

export const IconSize = {
  ICON_WIDTH: 56,
  ICON_HEIGHT: 70,
  ANCHOR_WIDTH: 28,
  ANCHOR_HEIGHT: 55,
};

export const URL_MARKER = 'img/icon-blip.svg';

export const QuestType = {
  AllQuests: {
    type: 'Все квесты',
    icon: <IconAllQuests />,
  },
  Adventure: {
    type: 'Приключения',
    icon: <IconAdventures />,
  },
  Horror: {
    type: 'Ужасы',
    icon: <IconHorrors />,
  },
  Mystic: {
    type: 'Мистика',
    icon: <IconMystic />,
  },
  Detective: {
    type: 'Детектив',
    icon: <IconDetective />,
  },
  Scifi: {
    type: 'Sci-fi',
    icon: <IconScifi />,
  },
}

export const ActionType = {
  ChangeQuestType: 'app/changeQuestType',
  LoadQuests: 'quests/loadQuests',
  LoadQuest: 'quest/loadQuest',
  LoadUndoQuest: 'quest/loadUndoQuest',
  LoadQuestError: 'quest/loadQuestError',
}

export const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
}

export const WarningMessage = {
  OrderPostFail: 'Something wrong with order, try again',
}
