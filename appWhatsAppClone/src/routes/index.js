import React from "react";
import { StackNavigator } from "react-navigation";

import Login from "../components/login-form/";
import Register from "../components/register-form/";
import Welcome from "../components/welcome/";
import Main from "../components/main/";

export default (Routes = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerStyle: { backgroundColor: "#115E54" },
        title: "Cadastro",
        headerTintColor: "#fff", //BackButton Color <-
        headerTitleStyle: { alignItem: "center", color: "white" }
      }
    },
    Welcome: {
      screen: Welcome,
      navigationOptions: { header: null }
    },
    Main: {
      screen: Main,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
