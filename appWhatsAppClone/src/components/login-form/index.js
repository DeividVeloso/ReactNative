import React, { Component } from "react";
import {
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet
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
  console.log("State do Redux", props);
  const changeScene = () => {
    props.navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={{ fontSize: 25 }}>WhatsApp Clone</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          value={props.email}
          style={styles.input}
          placeholder="E-mail"
        />
        <TextInput
          value={props.senha}
          style={styles.input}
          placeholder="Senha"
        />
        {console.log("Nav", props)}
        <TouchableOpacity onPress={changeScene}>
          <Text style={{ fontSize: 20 }}>
            Ainda não tem cadastro? cadastre-se!
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewButton}>
        <Button title="Acessar" color="#115E54" onPress={() => false} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});

export default connect(mapStateToProps, null)(FormLogin);
