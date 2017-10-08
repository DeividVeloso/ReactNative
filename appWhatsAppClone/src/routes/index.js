import React from "react";
import { StackNavigator } from "react-navigation";

import FormLogin from "../components/login-form/";
import Register from "../components/register-form/";

export default Routes = StackNavigator(
  {
  Login: { screen: FormLogin },
  Register: { screen: Register }
},
{
  headerMode: 'none'
});
