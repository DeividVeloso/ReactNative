const INITIAL_STATE = {
  nome: "",
  email: "",
  senha: "",
  error: "",
  errorLogin: ""
};
import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_ERROR
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
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        nome: "",
        senha: ""
      };
    }
    case REGISTER_USER_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    case LOGIN_USER_ERROR: {
      return {
        ...state,
        errorLogin: action.payload
      };
    }
    default:
      return state;
  }
};
