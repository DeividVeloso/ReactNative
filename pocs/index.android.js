import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, AppRegistry } from "react-native";
// import QuestionItem from './components/question-item';
import RadioButton from "./src/components/radio-button";
import _ from "lodash";

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
      answer: "",
      questions: {
        "01": {
          questao: "Qual seu nome?",
          a: "Deivid",
          b: "LP",
          c: "Edu",
          d: "Luizão"
        },
        "02": {
          questao: "Qual sua idade?",
          a: "20",
          b: "26",
          c: "39",
          d: "25"
        }
      }
    };
  }

  renderButtons(questions) {
    return _.map(questions, (value, id) => {
      //Transforma em Array
      return _.map(_.values(value), (item, index) => {
        return (
          <RadioButton
            stylesLabel={{ color: "red", fontSize: 18 }}
            text={`${index} ${item}`}
            selectedItem={this.state.selectedItem}
            onPress={id => this.setState({ selectedItem: id })}
            id={`${id}${index}`}
          />
        );
      });
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.viewQuestion}>
          {this.renderButtons(this.state.questions)}
        </View>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("pocs", () => pocs);
