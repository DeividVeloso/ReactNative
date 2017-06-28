import React, { Component } from "react";
import { ScrollView } from "react-native";
import Axios from "axios";

import Item from "./Item";

const urlApi = "http://faus.com.br/recursos/c/dmairr/api/itens.html";
export default class ListItens extends Component {
  constructor(props) {
    super(props);

    this.state = { listItens: [] };
  }

  componentWillMount() {
    Axios.get(urlApi)
      .then(response => {
        this.setState({ listItens: response.data });
      })
      .catch(error => error);
  }

  render() {
    return (
      <ScrollView>
        {this.state.listItens.map((item, index) => (
          <Item key={index} item={item}> </Item>
        ))}
      </ScrollView>
    );
  }
}
