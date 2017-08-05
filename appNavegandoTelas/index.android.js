import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'
import CenaContatos from './src/components/CenaContatos'
import CenaEmpresa from './src/components/CenaEmpresa'
import CenaServicos from './src/components/CenaServicos'

export default class appNavegandoTelas extends Component {
  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={{ id: 'principal' }} //Vai redenrizar a tela CenaPrincipal
        renderScene={(route, navigator) => { //recebe uma função de callback
          /*Defini a cena com base na rota*/

          switch (route.id) {
            case 'principal':
              return (<CenaPrincipal navigator={navigator} />);
            case 'clientes':
              return (<CenaClientes navigator={navigator} />);
            case 'contatos':
              return (<CenaContatos navigator={navigator} />);
            case 'empresa':
              return (<CenaEmpresa navigator={navigator} />);
            case 'servicos':
              return (<CenaServicos navigator={navigator} />);
            default:
              return false;
          }
        }}
      />
    );
  }
}
AppRegistry.registerComponent('appNavegandoTelas', () => appNavegandoTelas);
