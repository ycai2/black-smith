// @flow

import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from '../store';

const appBackgroundColor = { backgroundColor: 'blue', flex: 1 };

const store = configureStore();

export default () => (
  <Provider store={store}>
    <View style={appBackgroundColor} />
  </Provider>
);
