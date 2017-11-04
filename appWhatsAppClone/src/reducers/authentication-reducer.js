const INITIAL_STATE = { nome: "", email: "", senha: "" };
import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME
} from "../actions/action-types";

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case MODIFICA_EMAIL: {
      return {
        ...state,
        email: action.payload
      };
    }
    case MODIFICA_SENHA: {
      return {
        ...state,
        senha: action.payload
      };
    }
    case MODIFICA_NOME: {
      return {
        ...state,
        nome: action.payload
      };
    }
    default:
      return state;
  }
};
