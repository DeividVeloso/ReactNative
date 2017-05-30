import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = {
    styleText:{
      fontSize: 30,
      backgroundColor: '#08509B',
      marginTop: 15,
      color: '#fff',
      fontWeight: '100',  //posso colocar um peso de 100 a 900
      fontStyle: 'italic',
      textAlign: 'center',
      textDecorationLine: 'line-through' // Deixa sublinhado
      /*Só funciona em IOS :-( 
        shadowColor: '#000', //Defini a cor da sombra
        shadowOffset: {width:-10, height:-15}, // Define a posição da sombra
        shadowOpacity: 1 //Opacidade da sombra, forte ou fraca a visualização
      */
    }
  }

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.styleText}>
          Frases do Dia!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('appStyle', () => App);
