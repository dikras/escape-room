import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { ImageSize } from 'const';
import { fetchQuestAction } from 'store/api-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getQuest, getIsQuestLoading } from 'store/quests-reducer/selector';
import LoadingScreen from 'components/loading-screen/loading-screen';

const DetailedQuest = () => {
  const { id } = useParams();
  const quest = useSelector(getQuest);
  const isQuestLoading = useSelector(getIsQuestLoading);

  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestAction(id));
  }, [dispatch, id]);

  const renderQuest = () => {
    if (isQuestLoading) {
      return <LoadingScreen />;
    }

    if (quest) {
      const {
        coverImg,
        title,
        type,
        duration,
        peopleCount,
        level,
        description,
      } = quest;

      return (
        <S.Main>
          <S.PageImage
            src={`../${coverImg}`}
            alt={`Квест ${title}`}
            width={ImageSize.Cover.Width}
            height={ImageSize.Cover.Height}
          />
          <S.PageContentWrapper>
            <S.PageHeading>
              <S.PageTitle>{title}</S.PageTitle>
              <S.PageSubtitle>{type}</S.PageSubtitle>
            </S.PageHeading>

            <S.PageDescription>
              <S.Features>
                <S.FeaturesItem>
                  <IconClock width="20" height="20" />
                  <S.FeatureTitle>{duration} мин</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPerson width="19" height="24" />
                  <S.FeatureTitle>{peopleCount[0]}–{peopleCount[1]} чел</S.FeatureTitle>
                </S.FeaturesItem>
                <S.FeaturesItem>
                  <IconPuzzle width="24" height="24" />
                  <S.FeatureTitle>{level}</S.FeatureTitle>
                </S.FeaturesItem>
              </S.Features>

              <S.QuestDescription>
                {description}
              </S.QuestDescription>

              <S.QuestBookingBtn onClick={onBookingBtnClick}>
                Забронировать
              </S.QuestBookingBtn>
            </S.PageDescription>
          </S.PageContentWrapper>

          {isBookingModalOpened && <BookingModal handleModalCloseBtn={setIsBookingModalOpened}/>}
        </S.Main>
      );
    };
  }

  return (
    <MainLayout>
      {renderQuest()}
    </MainLayout>
  );
};

export default DetailedQuest;
