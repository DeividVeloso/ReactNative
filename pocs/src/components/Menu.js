import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class Menu extends React.Component {
  static navigationOptions = {
    title: "Menu"
  };
  render() {
    const { onLogout } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button onPress={() => navigate("Home", { user: 'Deivid'})} title="Welcome" />
        <Button onPress={() => navigate("Container", { user: 'Deivid'})} title="Container" />
        <Button onPress={() => navigate("Chat", { user: 'Deivid'})} title="Chat" />
        <Button onPress={onLogout} title="Logout" />
      </View>
    );
  }
}
