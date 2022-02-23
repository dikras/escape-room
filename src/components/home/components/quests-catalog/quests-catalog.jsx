import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { ImageSize, QuestType } from 'const';

const QuestsCatalog = ({ quests, currentQuestType, onQuestTypeClick }) => (
  <>
    <S.Tabs>
      {Object.values(QuestType).map((questType, id) => {
        const keyValue = `${questType}-${id}`;
        const isCurrent = currentQuestType === questType.type;
        return (
          <S.TabItem key={keyValue}>
            <S.TabBtn isActive={isCurrent}
              onClick={(evt) => {
                evt.preventDefault();
                onQuestTypeClick(questType.type);
              }}
            >
              {questType.icon}
              <S.TabTitle>{questType.type}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        );
      })}
    </S.Tabs>

    <S.QuestsList>
      {quests.map((quest) => {
        const keyValue = `${quest.id}`;
        return (
          <S.QuestItem key={keyValue}>
            <S.QuestItemLink to={`/detailed-quest/${quest.id}`}>
              <S.Quest>
                <S.QuestImage
                  src={quest.previewImg}
                  width={ImageSize.Preview.Width}
                  height={ImageSize.Preview.Height}
                  alt={`квест ${quest.title}`}
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {quest.peopleCount[0]}–{quest.peopleCount[1]} чел
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {quest.level}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        )
      })}
    </S.QuestsList>
  </>
);

export default QuestsCatalog;
