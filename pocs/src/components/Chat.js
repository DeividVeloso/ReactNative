import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`
  });
  render() {
    const { params } = this.props.navigation.params;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}
