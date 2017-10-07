import React, { Component } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    padding: 10
  },
  viewInput: {
    flex: 2,
    justifyContent: "center"
  },
  viewButton: {
    flex: 2,
    justifyContent: "center"
  },
  input: {
    alignSelf: "stretch",
    fontSize: 20
  }
});
export default props => (
  <View style={styles.container}>
    <View style={styles.viewInput}>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Senha" />
    </View>
    <View style={styles.viewButton}>
      <Button title="Cadastrar" color="#115E54" onPress={() => false} />
    </View>
  </View>
);
