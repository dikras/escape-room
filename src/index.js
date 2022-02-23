import { StrictMode } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'components/app/app';
import { quests } from './mocks/quests';
import { reducer } from 'store/reducer';
import { createQuestsList } from 'store/action';

const store = createStore(reducer);
store.dispatch(createQuestsList(quests));

render(
  <StrictMode>
    <Provider store={store}>
      <App quests={quests} />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
