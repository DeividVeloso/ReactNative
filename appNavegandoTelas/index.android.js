import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'

export default class appNavegandoTelas extends Component {
  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{ id: 'a' }} //Vai redenrizar a tela CenaPrincipal
        renderScene={(route, navigator) => { //recebe uma função de callback
          /*Defini a cena com base na rota*/
          if (route.id === 'a') {
            return (<CenaPrincipal  navigator={navigator}/>);
          } else if (route.id === 'b') {
            return (<CenaClientes />);
          }
        }}
      />
    );
  }
}
AppRegistry.registerComponent('appNavegandoTelas', () => appNavegandoTelas);
