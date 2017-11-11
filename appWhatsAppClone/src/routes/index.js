import React from "react";
import { StackNavigator } from "react-navigation";

import FormLogin from "../components/login-form/";
import Register from "../components/register-form/";
import Welcome from "../components/welcome/";

export default (Routes = StackNavigator(
  {
    Login: { screen: FormLogin },
    Register: { screen: Register },
    Welcome: { screen: Welcome }
  },
  {
    headerMode: "none"
  }
));
