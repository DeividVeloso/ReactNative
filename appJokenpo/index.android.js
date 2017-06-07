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

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado : '' }
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


    var resultado = ''

    if(escolhaComputador == escolhaUsuario){
        resultado = 'Empate!'
    } else if((escolhaComputador == 'pedra' && escolhaUsuario == 'papel') 
              || (escolhaComputador == 'papel' && escolhaUsuario == 'tesoura') 
              || (escolhaComputador == 'tesoura' && escolhaUsuario == 'pedra')){
             resultado = 'Usuário ganhou!'
    }else {
        resultado = 'Computador ganhou!'
    }

    this.setState({ escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado: resultado });
  }

  render() {
    return (
      <View>
        <Topo></Topo>
        <View style={styles.painelBotoes}>
            <View style={ styles.botaoEscolha }>
              <Button title='pedra' onPress={() => this.jokenpo('pedra')}></Button>
            </View>
            <View style={ styles.botaoEscolha }>
              <Button title='papel' onPress={() => this.jokenpo('papel')}></Button>
            </View>
            <View style={ styles.botaoEscolha }>
              <Button title='tesoura' onPress={() => this.jokenpo('tesoura')}></Button>
            </View>
        </View>
        <View>
          <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
          <Text>Resultado: {this.state.resultado}</Text>
        </View>
        
        
      </View>
    );
  }
}

 class Topo extends Component{
    render(){
        return(
            <View>
                <Image source={require('./imgs/jokenpo.png')}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   botaoEscolha:{
     width: 90
   },
   painelBotoes:{
     flexDirection: 'row', //Alinha os componetes em linha(display-inline) ao invés de display block
     justifyContent: 'space-between',//dá espaçamento entre eles com a mesma proporção
     margin: 10,
   }
});

AppRegistry.registerComponent('appJokenpo', () => appJokenpo);
