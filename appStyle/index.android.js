import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = {
  styleText: {
    fontSize: 40,
    backgroundColor: '#08509B',
    width: 60,
    height: 60
  },
  styleTextTwo: {
    fontSize: 40,
    backgroundColor: '#2A48FA',
    width: 60,
    height: 60
  },
  styleView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center', //FlexBox alinhamento na tela
    alignItems: 'center',
    flexDirection: 'row'
  }
}

export default class App extends Component {
  render() {
    const { styleText, styleTextTwo, styleView } = styles;
    return (
      <View style={styleView}>
        <Text style={styleText}>A</Text>
        <Text style={styleTextTwo}>B</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('appStyle', () => App);
