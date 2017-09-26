import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat`
  });
  render() {
    return (
      <View>
        <Text>Chat with Deivid</Text>
      </View>
    );
  }
}
