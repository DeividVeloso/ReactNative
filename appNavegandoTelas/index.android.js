import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal'

export default class appNavegandoTelas extends Component {
  render() {
    return (
      <View>
        <CenaPrincipal/>
      </View>
    );
  }
}
AppRegistry.registerComponent('appNavegandoTelas', () => appNavegandoTelas);
