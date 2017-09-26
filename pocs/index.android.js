import React from "react";
import { AppRegistry, Text } from "react-native";
import { StackNavigator } from "react-navigation";

import Container from "./src/components/Container";
import Home from './src/components/Home';
import Chat from './src/components/Chat';

 const pocs = StackNavigator({
  Home: { screen: Home },
  Container: { screen: Container},
  Chat: {screen: Chat}
});

AppRegistry.registerComponent("pocs", () => pocs);
