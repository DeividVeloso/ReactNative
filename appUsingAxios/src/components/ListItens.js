import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

import Item from './Item';

const urlApi = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
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
      <View>
        {this.state.listItens.map((item, index) => (<Text key={index}> {item.titulo} </Text>))}
      </View>
    );
  }
}
