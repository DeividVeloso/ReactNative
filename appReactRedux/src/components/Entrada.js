import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Numero from './Numero';

export default props => (
    <View style={styles.viewNumero}>
        <Numero num={props.num1} atualizaValor={props.atualizaValor} nomeCampo='num1'/>
        <Numero num={props.num2} atualizaValor={props.atualizaValor} nomeCampo='num2'/>
    </View>
);

const styles = StyleSheet.create({
    viewNumero:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20 //Horizontal
    }
});








