import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import ListItens from './src/components/ListItens';

 class appUsingAxios extends Component {
  render() {
    return <ListItens />;
  }
}

AppRegistry.registerComponent("appUsingAxios", () => appUsingAxios);
