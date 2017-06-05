import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const styles = {
    main:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button:{
      backgroundColor: '#538530',
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop:20
    },
    buttonText:{
      color: '#fff',
      fontSize: 16,
      fontWeight:'bold'
    }
}

const buttonClicked = () =>{
  //Gera números aleatórios
  var randomNumber = Math.random();

  //Gera o intervalo de números, ex: de 1 à 5
  randomNumber = randomNumber * 5

  //Gerar numeros inteiros
  randomNumber = Math.floor(randomNumber);

  var frases = Array();

  frases[0] = 'aa';
  frases[1] = 'bb';
  frases[2] = 'cc';
  frases[3] = 'dd';
  frases[4] = 'ee';

  var fraseChoose = frases[randomNumber];

  Alert.alert(fraseChoose);
}

export default class App extends Component {
  render() {
    const { main, button, buttonText } = styles;
    return (
      <View style={main}>
        <Image source={ require('./imgs/logo.png') } />
        <TouchableOpacity style={button} onPress={buttonClicked}>
             <Text style={buttonText}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('appStyle', () => App);
