import React from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import Topo from './src/components/Topo';
import Resultado from './src/components/Resultado';
import Painel from './src/components/Painel';

const appReactRedux = () => (
  <View>
    <Topo />
    <Resultado />
    <Painel />
  </View>
)

AppRegistry.registerComponent('appReactRedux', () => appReactRedux);
