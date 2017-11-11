import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";


import Routes from "./src/routes/";
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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
