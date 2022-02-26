import { StrictMode } from 'react';
import { render } from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from 'components/app/app';
import { rootReducer } from 'store/root-reducer';
import { createAPI } from 'api';
import { fetchQuestsAction } from 'store/api-actions';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

store.dispatch(fetchQuestsAction());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
