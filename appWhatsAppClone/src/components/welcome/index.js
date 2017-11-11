import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  image: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    flex: 1
  }
});

const Welcome = () => {
  return (
    <Image
      style={{ flex: 1, width: null }}
      source={require("../../imgs/bg.png")}
    >
      <View style={styles.container}>
        <View style={styles.image}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Seja Bem-vindo</Text>
          <Image source={require("../../imgs/logo.png")} />
        </View>
        <View style={styles.button}>
          <Button title="Fazer Login" onPress={() => false} />
        </View>
      </View>
    </Image>
  );
};

export default Welcome;
