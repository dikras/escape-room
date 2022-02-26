import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import NotFoundScreen from 'components/not-found-screen/not-found-screen';
import Home from 'components/home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'const';
import { useSelector } from 'react-redux';
import { getQuests } from 'store/quests-reducer/selector';

const App = () => {
  const quests = useSelector(getQuests);

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={AppRoute.DetailedQuest}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route exact path={AppRoute.Home}>
            <Home quests={quests} />
          </Route>
          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
};

export default App;
