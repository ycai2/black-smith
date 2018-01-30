// @flow

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from '../store';

const appBackgroundColor = { backgroundColor: 'blue' };

export default () => (
  <Provider store={store}>
    <View style={appBackgroundColor} />
  </Provider>
);
