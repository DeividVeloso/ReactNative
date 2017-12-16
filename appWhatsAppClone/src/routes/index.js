import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../components/login-form/';
import Register from '../components/register-form/';
import Welcome from '../components/welcome/';
import Main from '../components/main/';
import AddContact from '../components/contacts/add-contact';
import Chat from '../components/chats/chat';

export default (Routes = StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        headerStyle: { backgroundColor: '#115E54' },
        title: 'Cadastro',
        headerTintColor: '#fff', // BackButton Color <-
        headerTitleStyle: { alignItems: 'center', color: 'white' },
      },
    },
    Welcome: {
      screen: Welcome,
      navigationOptions: { header: null },
    },
    Main: {
      screen: Main,
      navigationOptions: { header: null },
    },
    AddContact: {
      screen: AddContact,
      navigationOptions: {
        headerStyle: { backgroundColor: '#115E54' },
        title: 'Adicionar Contato',
        headerTintColor: '#fff', // BackButton Color <-
        headerTitleStyle: { alignItems: 'center', color: 'white' },
      },
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        headerStyle: { backgroundColor: '#115E54' },
        title: 'Conversa',
        headerTintColor: '#fff', // BackButton Color <-
        headerTitleStyle: { alignItems: 'center', color: 'white' },
      },
    },
  },
  {
    headerMode: 'screen',
  },
));
