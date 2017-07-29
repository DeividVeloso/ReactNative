import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableHighlight
} from "react-native";

import BarraNavegacao from "./BarraNavegacao";

const logo = require("../imgs/logo.png");
const menuCliente = require("../imgs/menu_cliente.png");
const menuContato = require("../imgs/menu_contato.png");
const menuEmpresa = require("../imgs/menu_empresa.png");
const menuServico = require("../imgs/menu_servico.png");

const styles = StyleSheet.create({
  viewLogo: {
    alignItems: "center",
    marginTop: 20
  },
  viewFirst: {
    flexDirection: "row",
    justifyContent: "center"
  },
  viewSecond: {
    flexDirection: "row",
    justifyContent: "center"
  },
  img: {
    margin: 15
  }
});

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar
          hidden={false} //Usado para esconder a barra de status
          backgroundColor={"#CCC"}
        />


        <BarraNavegacao/>


        <View style={styles.viewLogo}>
          <Image source={logo} />
        </View>
        <View style={styles.viewFirst}>
          <TouchableHighlight onPress={() => {
              this.props.navigator.push({ id: 'b'});
            }}>
            <Image style={styles.img} source={menuCliente} />
          </TouchableHighlight>
          <Image style={styles.img} source={menuContato} />
        </View>
        <View style={styles.viewSecond}>
          <Image style={styles.img} source={menuEmpresa} />
          <Image style={styles.img} source={menuServico} />
        </View>
      </View>
    );
  }
}
