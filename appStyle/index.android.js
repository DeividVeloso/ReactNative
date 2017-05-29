import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = {
    styletext:{
      fontSize: 20
    }
  }

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={styles.styletext}>
          Frases do Dia!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('appStyle', () => App);
