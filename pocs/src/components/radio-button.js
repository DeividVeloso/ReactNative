import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  selected: {
    fontWeight: "bold"
  }
});

const RadioButton = props => (
  <TouchableOpacity
    style={[styles.container, props.style]}
    onPress={() => props.onPress(props.id)}
  >
    {props.selectedItem == props.id ? (
      <Text>Clicado</Text>
    ) : (
      <Text>Não Clicado</Text>
    )}
    <Text
      style={[
        props.stylesLabel,
        props.selectedItem == props.id ? styles.selected : ""
      ]}
    >
      {" "}
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default RadioButton;
