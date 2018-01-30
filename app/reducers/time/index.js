// @flow

import { actionNames } from '../../constants/action-names';

const timeReducer = (state = Date.now(), action) => {
  switch (action.type) {
    case actionNames.COUNT_SECOND:
      return Date.now();

    default:
      return state;
  }
};

export default timeReducer;
