// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import clockMiddleware from '../middleware/clock';
import rootReducer from '../reducers';
import { actionNames } from '../constants/action-names';

const makeLoggerPredicate = (getState, action) => action.type !== actionNames.COUNT_SECOND;

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(
    sagaMiddleware,
    clockMiddleware,
    createLogger({
      predicate: makeLoggerPredicate,
    }),
  );

  const store = createStore(
    rootReducer,
    initialState,
    compose(middleware),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};

export default configureStore;
