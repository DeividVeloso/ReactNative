import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Slider
} from "react-native";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valores: [8, 15, 25, 30, 40, 50, 100, 200],
      value: 8
    };
  }
  static navigationOptions = {
    title: "Welcome"
  };

  onChangeValores(value) {
    console.log("Value", this.state.valores[value]);
    this.setState({ value: this.state.valores[value] });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Text>R$ {this.state.value}</Text>
        <Slider
          minimumValue={0}
          maximumValue={this.state.valores.length - 1}
          step={1}
          onValueChange={value => this.onChangeValores(value)}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {this.state.valores.map(item => <Text>{item}</Text>)}
        </View>
        <Button
          onPress={() => navigate("Chat", { user: "Deivid" })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
