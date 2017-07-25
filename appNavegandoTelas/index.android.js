import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'

export default class appNavegandoTelas extends Component {
  render() {
    return (
        <Navigator/>
    );
  }
}
AppRegistry.registerComponent('appNavegandoTelas', () => appNavegandoTelas);
