import React, { Component } from "react";
import {
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Image,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import {
  authenticationUser,
  modificaSenha,
  modificaEmail
} from "../../actions/authentication-actions";

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

class Login extends Component {
  authenticationUser = () => {
    const { email, senha } = this.props.authentication;
    this.props.authenticationUser(email, senha).then(resp => {
      if (resp.type !== "LOGIN_USER_ERROR") {
        this.props.navigation.navigate("Main");
      }
    });
  };
  changeScene = () => {
    this.props.navigation.navigate("Register");
  };

  renderBtnAcessar = () => {
    if (this.props.authentication.loading) {
      console.log("PASSEI AQUI PORAAA LOGIN");
      return <ActivityIndicator />;
    }
    return (
      <Button
        title="Acessar"
        color="#115E54"
        onPress={this.authenticationUser}
      />
    );
  };

  render() {
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
              value={this.props.authentication.email}
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              onChangeText={this.props.modificaEmail}
            />
            <TextInput
              value={this.props.authentication.senha}
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#fff"
              secureTextEntry
              onChangeText={this.props.modificaSenha}
            />

            <Text style={{ color: "red", fontSize: 18 }}>
              {this.props.authentication.errorLogin}
            </Text>

            <TouchableOpacity onPress={this.changeScene}>
              <Text style={{ fontSize: 20, color: "#fff" }}>
                Ainda não tem cadastro? cadastre-se!
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewButton}>{this.renderBtnAcessar()}</View>
        </View>
      </Image>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    authentication: state.authentication
  };
};

export default connect(mapStateToProps, {
  authenticationUser,
  modificaEmail,
  modificaSenha
})(Login);
