import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from "react-native";

const imgLogo = require("./imgs/logo.png");
const imgJogar = require("./imgs/botao_jogar.png");
const imgAbout = require("./imgs/sobre_jogo.png");
const imgOther = require("./imgs/outros_jogos.png");

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.playView}>
          <Image source={imgLogo} />
          <TouchableHighlight onPress={() => alert('clicou')}>
            <Image source={imgJogar} />
          </TouchableHighlight>
        </View>
        <View style={styles.aboutView}>
          <TouchableHighlight>
            <Image source={imgAbout} />
          </TouchableHighlight>
          <TouchableHighlight>
            <Image source={imgOther} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainView:{
        backgroundColor: '#61BD8C',
        flex:1
       
    },
    playView:{
        flex: 10,
        justifyContent: 'center',//Vertical
        alignItems: 'center',//Horizintal
    },
    aboutView:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
