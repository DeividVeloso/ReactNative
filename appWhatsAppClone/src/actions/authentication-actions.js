import firebase from "firebase";
import b64 from "base-64";

import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS
} from "./action-types";
import { NavigationActions } from "react-navigation";

//Action Creator é a função
export const modificaEmail = text => {
  //à action é o retorno dessa função
  return {
    type: MODIFICA_EMAIL,
    payload: text //são cargas úteis, são dados usados dentro do reducer;
  };
};

export const modificaSenha = text => {
  return {
    type: MODIFICA_SENHA,
    payload: text
  };
};

export const modificaNome = text => {
  return {
    type: MODIFICA_NOME,
    payload: text
  };
};

export const registerUser = user => {
  return dispatch => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.senha)
      .then(resp => {
        //Gravando no Database do firebase
        //contatos -> email -> nome
        firebase
          .database()
          .ref(`/contatos/${b64.encode(user.email)}`)
          .push({ nome: user.nome })
          .then(values => registerUserSuccess(dispatch));

        return resp;
      })
      .catch(error => registerUserError(error, dispatch));
  };
};

const registerUserSuccess = dispatch => {
  dispatch({
    type: REGISTER_USER_SUCCESS
  });
};

const registerUserError = (error, dispatch) => {
  dispatch({
    type: REGISTER_USER_ERROR,
    payload: error.message
  });
};

export const authenticationUser = (email, senha) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then(resp => dispatch(loginUsuarioSucesso()))
    .catch(error => dispatch(loginUsuarioError(error)));
};

const loginUsuarioSucesso = () => {
  return {
    type: LOGIN_USER_SUCCESS
  };
};
const loginUsuarioError = error => {
  return {
    type: LOGIN_USER_ERROR,
    payload: error.message
  };
};
