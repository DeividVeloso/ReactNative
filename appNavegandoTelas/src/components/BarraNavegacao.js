import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    navTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60
    },
    titulo:{
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
});

export default class BarraNavegacao extends Component {

  render() {
    const {navTitulo, titulo} = styles;
    return (
      <View style={navTitulo}>
        <Text style={titulo}>ATM Consultoria</Text>
      </View>
    );
  }
}
