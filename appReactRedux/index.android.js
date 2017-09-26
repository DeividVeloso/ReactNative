import React from 'react';
import {
  AppRegistry
} from 'react-native';

import './src/ReactotronConfig'

import App from './src/App';
const appReactRedux = () => (
  <App />
)

AppRegistry.registerComponent('appReactRedux', () => appReactRedux);
