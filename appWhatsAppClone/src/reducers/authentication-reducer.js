const INITIAL_STATE = { nome: "", email: "", senha: "" };

export default (state = INITIAL_STATE, action) => {
  console.log("dentro do redux", action);
  return state;
};
