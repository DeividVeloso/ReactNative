<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import MainScreen from './src/components/main-screen';
import AboutGame from './src/components/about-game';
import AnotherGames from './src/components/another-games';
import Result from './src/components/result';
export default class appcaraoucoroa extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key='principal' component={MainScreen} initial title='Cara ou Coroa'/>
          <Scene key='sobrejogo' component={AboutGame} />
          <Scene key='outrosjogos' component={AnotherGames} />
          <Scene key='resultado' component={Result} title='Resultado'/>
        </Scene>
      </Router>
>>>>>>> ede263a7f308a770f208417f7ca2e398569bb018
    );
  }
}

<<<<<<< HEAD

=======
>>>>>>> ede263a7f308a770f208417f7ca2e398569bb018
AppRegistry.registerComponent('appcaraoucoroa', () => appcaraoucoroa);
