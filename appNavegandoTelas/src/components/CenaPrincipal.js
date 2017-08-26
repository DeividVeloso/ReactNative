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


        <BarraNavegacao />


        <View style={styles.viewLogo}>
          <Image source={logo} />
        </View>
        <View style={styles.viewFirst}>
          {/*Menu Cliente*/}
          <TouchableHighlight
          underlayColor={'#B9C941'}
          activeOpacity={0.3}
            onPress={() => {
              this.props.navigator.push({ id: 'clientes' });
            }}>
            <Image style={styles.img} source={menuCliente} />
          </TouchableHighlight>
          {/*Menu Contato*/}
          <TouchableHighlight
            onPress={() => {
              this.props.navigator.push({ id: 'contatos' });
            }}>
            <Image style={styles.img} source={menuContato} />
          </TouchableHighlight>

        </View>
        <View style={styles.viewSecond}>
          {/*Menu Empresa*/}
          <TouchableHighlight
            onPress={() => {
              this.props.navigator.push({ id: 'empresa' });
            }}>
            <Image style={styles.img} source={menuEmpresa} />
          </TouchableHighlight>
          {/*Menu Servico*/}
          <TouchableHighlight
            onPress={() => {
              this.props.navigator.push({ id: 'servicos' });
            }}>
            <Image style={styles.img} source={menuServico} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
