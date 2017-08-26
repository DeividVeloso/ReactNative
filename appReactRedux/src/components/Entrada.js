import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Numero from './Numero';

export default props => (
    <View style={styles.viewNumero}>
        <Numero />
        <Numero />
    </View>
);

const styles = StyleSheet.create({
    viewNumero:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20 //Horizontal
    }
});








