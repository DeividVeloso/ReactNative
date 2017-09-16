import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default class Visor extends Component {
  render() {
      console.log(this.props.resultado)
    return (
      <View>
        <TextInput
          style={styles.txtResultado}
          placeholder="Resultado"
          editable={false}
          value={this.props.resultado}
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
