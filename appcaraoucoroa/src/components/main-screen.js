import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const imgLogo = require('./../imgs/logo.png');
const imgPlay = require('./../imgs/botao_jogar.png');
const imgAbout = require('./../imgs/sobre_jogo.png');
const imgOthers = require('./../imgs/outros_jogos.png');

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  viewLogo: {
    flex: 9,
    flexDirection: 'column',
    alignItems: 'center', // Vertical
    justifyContent: 'center',//Horizontal
  },
  viewOther: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});

class MainSreen extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.viewLogo}>
          <Image source={imgLogo} />
          <TouchableHighlight
           onPress={() => Actions.resultado()}>
            <Image source={imgPlay} />
          </TouchableHighlight>
        </View>
        <View style={styles.viewOther}>
          <TouchableHighlight
            onPress={() => Actions.sobrejogo()}>
            <Image source={imgAbout} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Actions.outrosjogos()}>
            <Image source={imgOthers} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
export default MainSreen;