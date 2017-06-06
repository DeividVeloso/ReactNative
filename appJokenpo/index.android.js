import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class appJokenpo extends Component {

  constructor(props) {
    super(props)

    this.state = { escolhaUsuario: '', escolhaComputador: '' }
  }

  jokenpo(escolha) {

    var numRandom = Math.floor(Math.random() * 3);
    switch (numRandom) {
      case 0:
       escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
      case 2:
        escolhaComputador = 'tesoura';
        break;
    }

    this.setState({ escolhaUsuario: escolha, escolhaComputador: escolhaComputador });

  }

  render() {
    return (
      <View>
        <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button title='pedra' onPress={() => this.jokenpo('pedra')}></Button>
        <Button title='papel' onPress={() => this.jokenpo('papel')}></Button>
        <Button title='tesoura' onPress={() => this.jokenpo('tesoura')}></Button>
      </View>
    );
  }
}

AppRegistry.registerComponent('appJokenpo', () => appJokenpo);
