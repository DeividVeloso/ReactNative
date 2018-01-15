import b64 from 'base-64';
import firebase from 'firebase';
import * as types from './action-types';
import { head, values } from 'lodash';

export const modifyAddContact = email => ({
  type: types.ADD_CONTACT_EMAIL_MODIFIED,
  payload: email
});

export const addContact = email => dispatch => {
  const emailB64 = b64.encode(email);
  firebase
    .database()
    .ref(`/contatos/${emailB64}`)
    .once('value') // Faz apenas uma unica consulta, tra´s o snapshot do valordesse nó email.
    .then(snapshot => {
      // Retonar os valores do nó
      if (snapshot.val()) {
        // usuário que queremos adicionar e recuperar o nome
        // Transformando o objeto em array para poder acessar o nome e pegando o primeiro index 0
        const dados = head(values(snapshot.val()));
        // Pegar o usuário logado
        const emailUserB64 = b64.encode(firebase.auth().currentUser.email);
        // criando meu endpoint "usuarios_contatos"
        firebase
          .database()
          .ref(`/usuario_contatos/${emailUserB64}`)
          .push({ email, nome: dados.nome })
          .then(() => dispatch(addContactSuccess('sucesso')))
          .catch(error => dispatch(addContactError(error.message)));
      } else {
        dispatch(addContactError('Usuário Não existe'));
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
  const emailLoggedUser = b64.encode(currentUser.email);
  firebase
    .database()
    .ref(`/usuario_contatos/${emailLoggedUser}`)
    .on('value', snapshot => {
      dispatch({
        type: types.LIST_CONTACT_USER,
        payload: snapshot.val()
      });
    });
};

export const sendMessage = (message, contactName, contactEmail) => dispatch => {
  // dados do contato
  const { currentUser } = firebase.auth();
  const currentUserEmail = currentUser.email;
  // dados do usuário logado
  const currentUserEmailB64 = b64.encode(currentUserEmail);
  const contactEmailB64 = b64.encode(contactEmail);

  // EndPoint que registra uma mensagem para o usuário logado
  firebase
    .database()
    .ref(`/mensagens/${currentUserEmailB64}/${contactEmailB64}`)
    .push({ message, tipo: 'e' }) // Envio
    .then(() => {
      // Registra a mesma mensagem para o contato do usuário logado.
      firebase
        .database()
        .ref(`/mensagens/${contactEmailB64}/${currentUserEmailB64}`)
        .push({ message, tipo: 'r' }) // Recebimento
        .then(() => dispatch({ type: 'zxa', payload: message }));
    })
    .then(() => {
      // Armazenar os cabeçalhos do usuário autenticado, lista de conversas.
      firebase
        .database()
        .ref(`/usuario_conversas/${currentUserEmailB64}/${contactEmailB64}`)
        // Usado para atualizar o último registro existente.
        .set({ nome: contactName, email: contactEmail });
    })
    .then(() => {
      firebase
        .database()
        .ref(`/contatos/${currentUserEmailB64}`)
        .once('value')
        .then(snapshot => {
          const dadosCurrentUser = _.head(_.values(snapshot.val()));

          // Armazenar os cabeçalhos do contato, lista de conversas.
          firebase
            .database()
            .ref(`/usuario_conversas/${contactEmailB64}/${currentUserEmailB64}`)
            // Usado para atualizar o último registro existente.
            .set({ nome: dadosCurrentUser.nome, email: currentUser.email });
        });
    });
};

export const chatUserFetch = contactEmail => dispatch => {
  const { loggedUser } = firebase.auth();

  let loggedUserB64 = b64.encode(loggedUser.email);
  let contactEmailB64 = b64.encode(contactEmail);
  return firebase
    .database()
    .ref(`/mensagens/${loggedUserB64}/${contactEmailB64}`)
    .on('value', snapshot => {
      dispatch({
        type: LIST_CHAT_USER,
        payload: snapshot.value
      });
    });
};
