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

const detalheContatos = require('../imgs/detalhe_contato.png');
const color = '#61BD8C';

export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                <StatusBar
                    backgroundColor={"#61BD8C"}
                />
                <BarraNavegacao color={color}  voltar navigator={this.props.navigator} />

                <View style={styles.detalhes}>
                    <Image source={detalheContatos} />
                    <Text style={styles.txtTitulo}>Contatos</Text>
                </View>
                <View style={styles.detalheContatos}>
                    <Text style={styles.txtContatos}>Tel: (11) 1234-3698</Text>
                    <Text style={styles.txtContatos}>Cel: (11) 96255-6693</Text>
                    <Text style={styles.txtContatos}>Email: contato@atmconsultoria.com.br</Text>
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
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
        marginTop: 20,
        padding: 10
    },
    txtContatos: {
        fontSize: 18
    }
})
