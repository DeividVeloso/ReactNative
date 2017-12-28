import React, { Component } from "react";
import { View, Text, StyleSheet, AppRegistry } from "react-native";
import RadioForm from "./src/components/radio-form";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between"
  },
  title: { color: "#000", fontSize: 18 },

  question: { marginVertical: 5 },
  options: { marginVertical: 5 }
});

export class pocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: false,
      answer: "",
      questions: {
        "01": {
          1: "Deivid",
          2: "LP",
          3: "Edu",
          4: "Luizão"
        }
      }
    };
  }

  render() {
    return (
      <RadioForm
        question="Qual seu nome?"
        options={this.state.questions["01"]}
        onSelected={id => console.log(id)}
      />
    );
  }
}

AppRegistry.registerComponent("pocs", () => pocs);
