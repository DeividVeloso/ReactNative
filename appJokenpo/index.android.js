import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

class appJokenpo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
      colorResult: false
    };
  }

  jokenpo(escolhaUsuario) {
    const numRandom = Math.floor(Math.random() * 3);
    switch (numRandom) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    let resultado = '';
    let colorResult = false;

    //Além de verificar se é igual, também verificamos se é do mesmo tipo ===
    if (escolhaComputador === escolhaUsuario) {
      resultado = 'Empate!';
    } else if (
      (escolhaComputador === 'pedra' && escolhaUsuario === 'papel') ||
      (escolhaComputador === 'papel' && escolhaUsuario === 'tesoura') ||
      (escolhaComputador === 'tesoura' && escolhaUsuario === 'pedra')
    ) {
      resultado = 'Você ganhou!';
      colorResult = true;
    } else {
      resultado = 'Máquina ganhou!';
    }

    this.setState({
      escolhaUsuario,
      escolhaComputador,
      resultado,
      colorResult
    });
  }

  selectColor() {
    return {
      color: this.state.colorResult ? 'green' : 'red'
    };
  }

  render() {
    return (
      <View>
        <Topo />
        <View style={styles.painelBotoes}>
          <View style={styles.botaoEscolha}>
            <Button title="pedra" onPress={() => this.jokenpo('pedra')} />
          </View>
          <View style={styles.botaoEscolha}>
            <Button title="papel" onPress={() => this.jokenpo('papel')} />
          </View>
          <View style={styles.botaoEscolha}>
            <Button title="tesoura" onPress={() => this.jokenpo('tesoura')} />
          </View>
        </View>
        <View style={styles.painelResult}>
          <Text style={[styles.txtResultado, this.selectColor()]}>
            {' '}{this.state.resultado}
          </Text>

          <Icone
            escolha={this.state.escolhaComputador}
            jogador="Computador: "
          />
          <Icone escolha={this.state.escolhaUsuario} jogador="Você: " />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  botaoEscolha: {
    width: 90
  },
  painelBotoes: {
    flexDirection: 'row', //Alinha os componetes em linha(display-inline) ao invés de display block
    justifyContent: 'space-between', //dá espaçamento entre eles com a mesma proporção
    margin: 10
  },
  painelResult: {
    alignItems: 'center'
  },
  txtResultado: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('appJokenpo', () => appJokenpo);
