import { NavigationActions } from "react-navigation";

export const navigate = route => dispatch => {
  console.log("passei por aqui");
  dispatch(NavigationActions.navigate({ routeName: route }));
};
