import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBLf90FmTWGwORqpAfivXaAOoVggOYhg60",
      authDomain: "configuracaofirebasereac-9f37a.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-9f37a.firebaseio.com",
      projectId: "configuracaofirebasereac-9f37a",
      storageBucket: "configuracaofirebasereac-9f37a.appspot.com",
      messagingSenderId: "106049079487"
    };
    firebase.initializeApp(config);
  }


  cadastrarUsuario() {
    let email = 'veloso.deivid@gmail.com';
    let password = '123456';

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  verificarUsuarioLogado() {
    //const usuarioLogado = firebase.auth().currentUser;
    const usuario = firebase.auth()
    //Precisa ser chamado para invocar o método
    usuario.onAuthStateChanged(
      (usuarioLogado) => {
        if (usuarioLogado) {
          alert("User logado");
        } else {
          alert("User not logado");
        }
      }
    );
  }

  deslogarUsuario() {
    const usuario = firebase.auth()
    usuario.signOut();
  }

  logarUsuario() {
    let email = 'veloso.deivid@gmail.com';
    let password = '123456777';

    const usuario = firebase.auth()
    usuario.signInWithEmailAndPassword(email, password);

  }

  render() {
    return (
      <View>
        <Button
          title='Salvar dados'
          color='#841584'
          onPress={() => this.cadastrarUsuario()} />

        <Button
          title='verificar Logado'
          color='#841584'
          onPress={() => this.verificarUsuarioLogado()} />

        <Button
          title='Deslogar usuário'
          color='#841584'
          onPress={() => this.deslogarUsuario()} />

        <Button
          title='Logar usuário'
          color='#841584'
          onPress={() => this.logarUsuario()} />
      </View>
    );
  }
}


AppRegistry.registerComponent('firebaseTeste', () => App);
