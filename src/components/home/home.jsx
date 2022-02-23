import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import { changeQuestType } from 'store/action';
import {connect} from 'react-redux';
import { QuestType } from 'const';

const mapStateToProps = ({ quests, currentQuestType }) => ({
  quests,
  currentQuestType,
});

const mapDispatchToProps = (dispatch) => ({
  onQuestTypeClick(questType) {
    dispatch(changeQuestType(questType));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const HomePage = (props) => {
  const { quests, currentQuestType, onQuestTypeClick } = props;
  const currentQuests = quests.filter((quest) => quest.type === currentQuestType.toLowerCase());

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog
          quests={currentQuestType === QuestType.AllQuests.type ? quests : currentQuests}
          currentQuestType={currentQuestType}
          onQuestTypeClick={onQuestTypeClick}
        />
      </S.Main>
    </MainLayout>
  );
};

export {HomePage};
export default connector(HomePage);
