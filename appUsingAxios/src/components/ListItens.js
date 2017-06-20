import React, { Component } from "react";
import { Text, View } from "react-native";

export default class ListItens extends Component {
  constructor(props) {
    super(props);
    console.log("Construindo a aplicação");
  }

  componentWillMount() {
    console.log("faz algo antes de renderizar o componente na tela");
  }

  componentDidMount() {
    console.log("faz algo depois de renderizar o componente na tela");
  }

  render() {
    console.log("Componente renderizou");
    return (
      <View>
        <Text> Teste </Text>
      </View>
    );
  }
}
