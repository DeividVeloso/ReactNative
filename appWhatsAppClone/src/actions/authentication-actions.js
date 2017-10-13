//Action Creator é a função
export const modificaEmail = text => {
  //à action é o retorno dessa função
  return {
    type: "modifica_email",
    payload: text //são cargas úteis, são dados usados dentro do reducer;
  };
};
