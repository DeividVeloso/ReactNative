import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = {
    main:{
      flex:1,
      backgroundColor: 'cornflowerblue'
    },
    contentOne:{
       flex:2, //2:11
       backgroundColor: 'brown'
    },
    contentTwo:{
       flex:8,//8:11
       backgroundColor: 'yellowgreen'
    },
    contentThree:{
       flex:1,//1:11
       backgroundColor: 'orangered'
    }
}

export default class App extends Component {
  render() {
    const { main, contentOne, contentTwo, contentThree } = styles;
    return (
      <View style={main}>
        <Text style={contentOne}>A</Text>
        <Text style={contentTwo}>B</Text>
        <Text style={contentThree}>C</Text>
        
      </View>
    );
  }
}

AppRegistry.registerComponent('appStyle', () => App);
