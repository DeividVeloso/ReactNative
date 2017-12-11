import b64 from "base-64";
import firebase from "firebase";
import * as types from "./action-types";
import { head, values } from "lodash";

export const modifyAddContact = email => {
  return {
    type: types.ADD_CONTACT_EMAIL_MODIFIED,
    payload: email
  };
};

export const addContact = email => dispatch => {
  let emailB64 = b64.encode(email);
  firebase
    .database()
    .ref(`/contatos/${emailB64}`)
    .once("value") //Faz apenas uma unica consulta, tra´s o snapshot do valordesse nó email.
    .then(snapshot => {
      //Retonar os valores do nó
      if (snapshot.val()) {
        //usuário que queremos adicionar e recuperar o nome
        //Transformando o objeto em array para poder acessar o nome e pegando o primeiro index 0
        let dados = head(values(snapshot.val()));
        //Pegar o usuário logado
        let emailUserB64 = b64.encode(firebase.auth().currentUser.email);
        //criando meu endpoint "usuarios_contatos"
        firebase
          .database()
          .ref(`/usuario_contatos/${emailUserB64}`)
          .push({ email: email, nome: dados.nome })
          .then(() => dispatch(addContactSuccess("sucesso")))
          .catch(error => dispatch(addContactError(error.message)));
      } else {
        dispatch(addContactError("Usuário Não existe"));
      }
    });
};

const addContactError = error => ({
  type: types.ADD_CONTACT_ERROR,
  payload: error
});

const addContactSuccess = message => ({
  type: types.ADD_CONTACT_SUCCESS,
  payload: message
});

export const resetNewContact = () => ({ type: types.ADD_CONTACT_RESET });

export const listContactsFetch = () => dispatch => {
  const { currentUser } = firebase.auth();
  let emailLoggedUser = b64.encode(currentUser.email);
  firebase
    .database()
    .ref(`/usuario_contatos/${emailLoggedUser}`)
    .on("value", snapshot => {
      console.log("QQQQ", snapshot.val());
      dispatch({
        type: types.LIST_CONTACT_USER,
        payload: snapshot.val()
      });
    });
};
