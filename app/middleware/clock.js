// @flow

import { actionNames } from '../constants/action-names';

export default (store) => {
  setInterval(() => {
    store.dispatch({ type: actionNames.COUNT_SECOND, payload: {} });
  }, 1000);

  return (next) => (action) => next(action);
};
