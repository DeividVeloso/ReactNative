import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Visor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultado: '1234'
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.txtResultado}
                    placeholder='Resultado'
                    value={this.state.resultado}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    txtResultado: {
        height: 100,
        fontSize: 30
    }
});





