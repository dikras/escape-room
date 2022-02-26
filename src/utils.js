const adaptQuestType = (questType) => {
  switch(questType) {
    case 'horror':
      return 'ужасы';
    case 'mystic':
      return 'мистика';
    case 'detective':
      return 'детектив';
    case 'adventures':
      return 'приключения';
    default:
      return 'sci-fi';
  }
};

const adaptQuestLevel = (questLevel) => {
  switch(questLevel) {
    case 'hard':
      return 'сложный';
    case 'medium':
      return 'средний';
    default:
      return 'легкий';
  }
};

export const adaptQuestToClient = (quest) => ({
  ...quest,
  type: adaptQuestType(quest.type),
  level: adaptQuestLevel(quest.level)
});
