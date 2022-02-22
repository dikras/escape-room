import * as S from './not-found-screen.styled';

const NotFoundScreen = () => (
  <S.NotFoundWrapper>
    <S.NotFoundTitle>404. Page not found</S.NotFoundTitle>
    <S.MainPageLink to='/'>Вернуться на главную</S.MainPageLink>
  </S.NotFoundWrapper>
);

export default NotFoundScreen;
