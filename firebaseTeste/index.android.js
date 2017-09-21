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
  salvadarDados() {
    var funcionarios = firebase.database().ref("funcionarios");
    //Gerando um nó de identificador único com o filho Nome
    funcionarios.push().set({
      nome: "Deivid Veloso",
      peso: '70KG',
      altura: '1,85'
    });
  }

  listarDados() {
    var pontuacao = firebase.database().ref("pontuacao");
    pontuacao.on('value', (snapshot) => {
        alert(snapshot.val()); //PEgando o valor do firebase nó "pontuação"
    });
  }

  render() {
    return (
      <View>

        <Button
          title='Salvar dados'
          color='#841584'
          onPress={() => this.salvadarDados()} />
        <Button
          title='Listar dados'
          color='#841584'
          onPress={() => this.listarDados()} />

        <Text>
          Meu App
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('firebaseTeste', () => App);
