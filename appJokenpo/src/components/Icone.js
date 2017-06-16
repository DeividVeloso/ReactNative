import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  icone:{
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador:{
    fontSize: 20
  }
});

const imgPedra = require('../../imgs/pedra.png');
const imgTesoura = require('../../imgs/tesoura.png');
const imgPapel = require('../../imgs/papel.png');

class Icone extends Component {
    render() {
      if (this.props.escolha) {
        return (
          <View style={styles.icone}>
              <Text style={styles.txtJogador}>{this.props.jogador}</Text>
              { 
                this.props.escolha === 'pedra' ? <Image source={imgPedra} />
                : this.props.escolha === 'tesoura' ? <Image source={imgTesoura} />
                : this.props.escolha === 'papel' ? <Image source={imgPapel} />
                : <Image />
              }
          </View>
        );
    }
    return false;
  }
}
export default Icone;
