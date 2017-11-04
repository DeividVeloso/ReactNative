import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes/";
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./src/reducers/";

export default class App extends Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyCotaxss1hoHzCv6cM3SwpwhYajFucTGa0",
      authDomain: "whatsapp-clone-12e7c.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-12e7c.firebaseio.com",
      projectId: "whatsapp-clone-12e7c",
      storageBucket: "whatsapp-clone-12e7c.appspot.com",
      messagingSenderId: "644232592575"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}
