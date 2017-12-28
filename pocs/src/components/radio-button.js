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
      <View
        style={{
          borderColor: "black",
          borderRadius: 15,
          borderWidth: 3,
          height: 30,
          width: 30
        }}
      >
        <View
          style={{
            borderColor: "red",
            borderRadius: 24 / 2,
            height: 24,
            width: 24,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center"
          }}
        />
      </View>
    ) : (
      <View
        style={{
          borderColor: "black",
          borderRadius: 30,
          borderWidth: 3,
          height: 30,
          width: 30
        }}
      />
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
