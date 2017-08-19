import React from 'react';
import { View, Text, TextInput ,StyleSheet } from 'react-native';

export default props => (
    <View>
        <TextInput
            style={styles.txtResultado}
            placeholder='Resultado'
        />
    </View>
);

const styles = StyleSheet.create({

    txtResultado: {
        height: 100,
        fontSize: 30
    }
});





