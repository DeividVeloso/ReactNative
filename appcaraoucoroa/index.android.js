/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainScreen from './src/main-screen';

export default class appcaraoucoroa extends Component {
  render() {
    return (
      <MainScreen/>
    );
  }
}


AppRegistry.registerComponent('appcaraoucoroa', () => appcaraoucoroa);
