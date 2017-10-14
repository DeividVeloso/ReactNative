import React, { Component } from "react";
import { Text, Button, TextInput, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  modificaEmail,
  modificaSenha
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
  console.log("Register", props);
  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput value={props.nome} style={styles.input} placeholder="Nome" />
        <TextInput
          value={props.email}
          style={styles.input}
          placeholder="E-mail"
          onChangeText={text => props.modificaEmail(text)}
        />
        <TextInput
          value={props.senha}
          style={styles.input}
          placeholder="Senha"
          onChangeText={text => props.modificaSenha(text)}
        />
      </View>
      <View style={styles.viewButton}>
        <Button title="Cadastrar" color="#115E54" onPress={() => false} />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log("state global", state);
  return {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  };
};

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(
  Register
);
