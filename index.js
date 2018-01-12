// @flow

import { AppRegistry } from 'react-native';
import App from './app/containers/app';

// eslint-disable-next-line no-console
console.info(`Bootstrapping app with __DEV__ === ${!!global.__DEV__}`);

AppRegistry.registerComponent('BlackSmith', () => App);
