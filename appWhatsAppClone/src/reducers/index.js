import { combineReducers } from "redux";
import authentication from "./authentication-reducer";
import app from "./app-reducer";

export default combineReducers({
  authentication: authentication,
  app
});
