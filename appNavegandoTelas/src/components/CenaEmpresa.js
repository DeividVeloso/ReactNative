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

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

const color = '#EC7148';


export default class CenaEmpresa extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor={"#EC7148"}
                />
                <BarraNavegacao color={color}  voltar navigator={this.props.navigator} />

                <View style={styles.detalhes}>
                    <Image source={detalheEmpresa} />
                    <Text style={styles.txtTitulo}>A Empresa</Text>
                </View>
                <View style={styles.detalheEmpresa}>
                    <Text style={styles.txtContatos}>Lorem ipntu dossrna siuenkops aiuejnf asjiods aspidskds psdisdj.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detalhes: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    detalheEmpresa: {
        marginTop: 20,
        padding: 10
    },
    txtContatos: {
        fontSize: 15
    }
})
