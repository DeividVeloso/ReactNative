import * as types from "../actions/action-types";

const INITIAL_STATE = { addContactEmail: "", error: "", success: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_CONTACT_EMAIL_MODIFIED: {
      return {
        ...state,
        addContactEmail: action.payload
      };
    }
    case types.ADD_CONTACT_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    case types.ADD_CONTACT_SUCCESS: {
      return {
        ...state,
        success: action.payload
      };
    }
    case types.ADD_CONTACT_RESET: {
      return {
        ...INITIAL_STATE
      };
    }
    default:
      return state;
  }
};
