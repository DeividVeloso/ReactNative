import { combineReducers } from 'redux';
import authentication from './authentication-reducer';
import app from './app-reducer';
import chat from './chat-reducer';
import listChats from './list-chats-reducer';

export default combineReducers({
  authentication: authentication,
  app,
  chat,
  listChats
});
