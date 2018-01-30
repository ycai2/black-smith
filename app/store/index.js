// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware, createLogger());

  const store = createStore(
    rootReducer,
    initialState,
    compose(middleware),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};

export default configureStore({});
