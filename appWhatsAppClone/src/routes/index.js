import React from "react";
import { StackNavigator } from "react-navigation";

import Login from "../components/login-form/";
import Register from "../components/register-form/";
import Welcome from "../components/welcome/";
import Main from "../components/main/";

export default (Routes = StackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    Welcome: { screen: Welcome },
    Main: { screen: Main }
  },
  {
    headerMode: "none"
  }
));
