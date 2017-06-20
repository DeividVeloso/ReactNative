import React, { Component } from 'react';
import { View } from 'react-native';
import Axios from 'axios';

import Item from './Item';

const urlApi = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
export default class ListItens extends Component {

componentWillMount() {
    Axios.get(urlApi)
    .then((response) => { console.log(response); })
    .catch((error) => console.log(error));
}

  render() {
    return (
      <View>
        <Item />
        <Item />
        <Item />
      </View>
    );
  }
}
