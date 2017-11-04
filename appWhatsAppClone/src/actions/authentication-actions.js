import { MODIFICA_EMAIL, MODIFICA_SENHA, MODIFICA_NOME } from "./action-types";
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