import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet
} from "react-native";

import BarraNavegacao from "./BarraNavegacao";

const  detalheClientes = require('../imgs/detalhe_cliente.png');
const  cliente1 = require('../imgs/cliente1.png');
const  cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
      <View>
        <StatusBar
          hidden={false} //Usado para esconder a barra de status
          backgroundColor={"#B9C941"}
        />

        <BarraNavegacao voltar navigator={this.props.navigator}/>
        
        <View style={styles.detalhes}>
            <Image source={detalheClientes} />
            <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>
         <View style={styles.detalheClientes}>
            <Image source={cliente1} />
            <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>
         <View style={styles.detalheClientes}>
            <Image source={cliente2} />
            <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
         </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
    detalhes:{
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo:{
        fontSize: 30,
        color: '#B9C941',
        marginLeft: 10,
        marginTop: 25
    },
    detalheClientes : {
       padding:20,
       marginTop: 10
    },
    txtDetalheCliente:{
        fontSize:18,
        marginLeft: 10
    }
    
})
