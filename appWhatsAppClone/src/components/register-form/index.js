import React, { Component } from "react";
import { Text, Button, TextInput, View, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  registerUser
} from "../../actions/authentication-actions";

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

const Register = props => {
  const handleRegister = () => {
    const user = {
      nome: props.authentication.nome,
      email: props.authentication.email,
      senha: props.authentication.senha
    };
    props.registerUser(user);
  };

  return (
    <Image
      style={{ flex: 1, width: null }}
      source={require("../../imgs/bg.png")}
    >
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput
            value={props.authentication.nome}
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#fff"
            onChangeText={text => props.modificaNome(text)}
          />
          <TextInput
            value={props.authentication.email}
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#fff"
            onChangeText={text => props.modificaEmail(text)}
          />
          <TextInput
            value={props.authentication.senha}
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#fff"
            onChangeText={text => props.modificaSenha(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.viewButton}>
          <Button title="Cadastrar" color="#115E54" onPress={handleRegister} />
        </View>
      </View>
    </Image>
  );
};

const mapStateToProps = state => {
  return {
    authentication: state.authentication
  };
};

export default connect(mapStateToProps, {
  modificaEmail,
  modificaSenha,
  modificaNome,
  registerUser
})(Register);
