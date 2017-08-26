import React from 'react';
import { Picker, StyleSheet } from 'react-native';

export default props => (
    <Picker style={styles.operacao}>
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
        <Picker.Item label='Divisão' value='divisao' />
    </Picker>
);

const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom:15
    }
})







