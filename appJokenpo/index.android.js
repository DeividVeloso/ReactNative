import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class appJokenpo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
      colorResult: false
    }
  }

  jokenpo(escolhaUsuario) {

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


    var resultado = '';
    var colorResult = false;

    if (escolhaComputador == escolhaUsuario) {
      resultado = 'Empate!'
    } else if ((escolhaComputador == 'pedra' && escolhaUsuario == 'papel')
      || (escolhaComputador == 'papel' && escolhaUsuario == 'tesoura')
      || (escolhaComputador == 'tesoura' && escolhaUsuario == 'pedra')) {
      resultado = 'Você ganhou!';
      colorResult = true;
    } else {
      resultado = 'Máquina ganhou!'
    }

    this.setState({ escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado: resultado, colorResult: colorResult });
  }

  selectColor() {
    return {
      color: this.state.colorResult ? 'green' : 'red'
    }
  }

  render() {
    return (
      <View>
        <Topo></Topo>
        <View style={styles.painelBotoes}>
          <View style={styles.botaoEscolha}>
            <Button title='pedra' onPress={() => this.jokenpo('pedra')}></Button>
          </View>
          <View style={styles.botaoEscolha}>
            <Button title='papel' onPress={() => this.jokenpo('papel')}></Button>
          </View>
          <View style={styles.botaoEscolha}>
            <Button title='tesoura' onPress={() => this.jokenpo('tesoura')}></Button>
          </View>
        </View>
        <View style={styles.painelResult}>
          <Text style={[styles.txtResultado, this.selectColor()]}> {this.state.resultado}</Text>
          
          <Icone  escolha={this.state.escolhaComputador} jogador='Computador: '></Icone>
          <Icone  escolha={this.state.escolhaUsuario} jogador='Você: '></Icone>

        </View>
      </View>
    );
  }
}

class Icone extends Component{
  render(){
    if(this.props.escolha){
      return(
        <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            { 
              this.props.escolha == 'pedra' ? <Image source={require(`./imgs/pedra.png`)}></Image> 
              : this.props.escolha == 'tesoura' ?  <Image source={require(`./imgs/tesoura.png`)}></Image>
              : this.props.escolha == 'papel' ?  <Image source={require(`./imgs/papel.png`)}></Image>
              : <Image></Image>
            }
        </View>
      )
    }else{
      return false;
    }
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./imgs/jokenpo.png')}></Image>
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
    justifyContent: 'space-between',//dá espaçamento entre eles com a mesma proporção
    margin: 10,
  },
  painelResult: {
    alignItems: 'center'
  },
  txtResultado: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold' 
  },
  icone:{
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador:{
    fontSize: 20
  }
});

AppRegistry.registerComponent('appJokenpo', () => appJokenpo);
