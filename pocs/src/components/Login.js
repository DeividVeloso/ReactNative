import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class Login extends Component {
  render() {
    const { onLogin } = this.props;

    return (
      <View>
        <Text>Faz login e ahaza</Text>
        <Button onPress={onLogin} title="Login" />
      </View>
    );
  }
}
