import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import { changeQuestType } from 'store/action';
import { useSelector, useDispatch } from 'react-redux';
import { QuestType } from 'const';
import { getQuests } from 'store/quests-reducer/selector';
import { getCurrentQuestType } from 'store/app-reducer/selector';

const Home = () => {
  const quests = useSelector(getQuests);
  const currentQuestType = useSelector(getCurrentQuestType);
  const currentQuests = quests.filter((quest) => quest.type === currentQuestType.toLowerCase());

  const questsChecked = currentQuestType === QuestType.AllQuests.type ? quests : currentQuests;

  const dispatch = useDispatch();
  const onQuestTypeClick = (questType) => {
    dispatch(changeQuestType(questType));
  };

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog
          quests={questsChecked}
          currentQuestType={currentQuestType}
          onQuestTypeClick={onQuestTypeClick}
        />
      </S.Main>
    </MainLayout>
  );
};

export default Home;
