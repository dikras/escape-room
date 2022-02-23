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

/* export const QuestType = {
  AllQuests: 'Все квесты',
  Adventure: 'Приключения',
  Horror: 'Ужасы',
  Mystic: 'Мистика',
  Detective: 'Детектив',
  Scifi: 'Sci-fi',
}; */

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
  ChangeQuestType: 'changeQuestType',
  CreateQuestsList: 'createQuestsList',
}
