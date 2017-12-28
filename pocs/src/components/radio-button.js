import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  selected: {
    fontWeight: "bold"
  },
  circle: {
    borderColor: "black",
    borderRadius: 15,
    borderWidth: 3,
    height: 30,
    width: 30
  },
  circleContent: {
    borderColor: "red",
    borderRadius: 24 / 2,
    height: 24,
    width: 24,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});

const RadioButton = props => (
  <TouchableOpacity
    style={[styles.container, props.style]}
    onPress={() => props.onPress(props.id)}
  >
    {props.selectedItem == props.id ? (
      <View style={styles.circle}>
        <View style={styles.circleContent} />
      </View>
    ) : (
      <View style={styles.circle} />
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
