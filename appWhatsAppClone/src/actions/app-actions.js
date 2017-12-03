import * as types from "./action-types";

export const modifyAddContact = email => {
  console.log("NovoEmail", email);
  return {
    type: types.ADD_CONTACT_EMAIL_MODIFIED,
    payload: email
  };
};
