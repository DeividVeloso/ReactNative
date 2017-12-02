import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_ERROR,
  LOGIN_REQUESTED,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_REQUESTED
} from "../actions/action-types";

const INITIAL_STATE = {
  nome: "",
  email: "",
  senha: "",
  error: "",
  errorLogin: "",
  loading: "",
  loading_register: ""
};

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
        senha: "",
        loading_register: false
      };
    }
    case REGISTER_USER_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading_register: false
      };
    }
    case REGISTER_USER_REQUESTED: {
      return {
        ...state,
        loading_register: true
      };
    }
    case LOGIN_USER_ERROR: {
      return {
        ...state,
        errorLogin: action.payload,
        loading: false
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case LOGIN_REQUESTED: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
};
