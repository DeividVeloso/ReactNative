import * as types from "../actions/action-types";

const INITIAL_STATE = { addContactEmail: "veloso.deivid@gmail.com" };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case types.ADD_CONTACT_EMAIL_MODIFIED: {
      return {
        ...state,
        addContactEmail: action.payload
      };
    }
    default:
      return state;
  }
};
