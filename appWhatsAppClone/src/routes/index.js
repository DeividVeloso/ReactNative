import React from "react";
import { Router, Scene } from "react-native-router-flux";

import FormLogin from "../components/login-form/";
import Register from "../components/register-form/";

export default props => (
  <Router>
    <Scene key="formLogin" Component={FormLogin} title="Login" initial />
    <Scene key="formRegister" Component={Register} title="Cadastro" />
  </Router>
);
