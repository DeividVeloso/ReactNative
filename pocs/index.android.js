import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, AppRegistry } from "react-native";
// import QuestionItem from './components/question-item';
import RadioButton from "./src/components/radio-button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between"
  },
  title: { color: "#000", fontSize: 18 },
  viewQuestion: { flex: 9, padding: 10 },
  question: { marginVertical: 5 },
  options: { marginVertical: 5 }
});

export class pocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: false,
      answer: ""
    };
  }

  // onSelectItem(selectedRadio, answer) {
  //   const radio = {};
  //   radio[`selectedRadio${selectedRadio}`] = selectedRadio;

  //   this.setState({
  //     selectedItem
  //     ...radio,
  //     answer
  //   });

  //   console.log("RESPOSTA", answer, selectedRadio);
  // }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.title}>1</Text>
          <RadioButton
            stylesLabel={{ color: "red", fontSize: 18 }}
            text="1 - TESTE"
            selectedItem={this.state.selectedItem}
            onPress={id => this.setState({ selectedItem: id })}
            id="1"
          />
          <RadioButton
            stylesLabel={{ color: "red", fontSize: 18 }}
            text="2 - TESTE"
            selectedItem={this.state.selectedItem}
            onPress={id => this.setState({ selectedItem: id })}
            id="2"
          />
          <RadioButton
            stylesLabel={{ color: "red", fontSize: 18 }}
            text="3 - TESTE"
            selectedItem={this.state.selectedItem}
            onPress={id => this.setState({ selectedItem: id })}
            id="3"
          />
          <RadioButton
            stylesLabel={{ color: "red", fontSize: 18 }}
            text="4 - TESTE"
            selectedItem={this.state.selectedItem}
            onPress={id => this.setState({ selectedItem: id })}
            id="4"
          />
        </View>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("pocs", () => pocs);
