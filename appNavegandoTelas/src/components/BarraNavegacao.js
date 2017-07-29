import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  navTitulo: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
    flexDirection: 'row'
  },
  titulo: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  }
});

const btnVoltar = require('../imgs/btn_voltar.png');

export default class BarraNavegacao extends Component {

  render() {
    const { navTitulo, titulo } = styles;
    //Se a propriedade for true, mostar a Imagem de voltar
    if (this.props.voltar) {
      return (
        <View style={navTitulo}>
          <Image source={btnVoltar} />
          <Text style={titulo}>ATM Consultoria</Text>
        </View>
      );
    }

    return (
      <View style={navTitulo}>
        <Text style={titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}
