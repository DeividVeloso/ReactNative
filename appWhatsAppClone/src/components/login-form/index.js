import React, { Component } from "react";
import {
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Image
} from "react-native";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    padding: 10
  },
  viewTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  viewInput: {
    flex: 2,
    justifyContent: "center"
  },
  viewButton: {
    flex: 2
  },
  input: {
    alignSelf: "stretch",
    fontSize: 20
  }
});

const FormLogin = props => {
  const changeScene = () => {
    props.navigation.navigate("Register");
  };

  return (
    <Image
      style={{ flex: 1, width: null }}
      source={require("../../imgs/bg.png")}
    >
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={{ fontSize: 25, color: "#fff" }}>WhatsApp Clone</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput
            value={props.authentication.email}
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#fff"
          />
          <TextInput
            value={props.authentication.senha}
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry
          />

          <TouchableOpacity onPress={changeScene}>
            <Text style={{ fontSize: 20, color: "#fff" }}>
              Ainda não tem cadastro? cadastre-se!
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButton}>
          <Button title="Acessar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    </Image>
  );
};

const mapStateToProps = state => ({
  authentication: state.authentication
});

export default connect(mapStateToProps, null)(FormLogin);
