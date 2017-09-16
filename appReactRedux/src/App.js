import React, { Component } from "react";
import { View } from "react-native";

import { Topo, Resultado, Painel } from "./components/";

class appReactRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      operacao: "soma",
      resultado: ""
    };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    let resultado = 0;

    switch (this.state.operacao) {
      case "soma":
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;

      case "subtracao":
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;

      case "divisao":
        resultado = parseFloat(this.state.num1) / parseFloat(this.state.num2);
        break;

      default:
        resultado = 0;
    }

    this.setState({ resultado: resultado.toString() });
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao });
  }

  atualizaValor(nomeCampo, valor) {
    const obj = {};
    obj[nomeCampo] = valor;

    this.setState(obj);
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          atualizaValor={this.atualizaValor}
          atualizaOperacao={this.atualizaOperacao}
          calcular={this.calcular}
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          resultado={this.state.resultado}
        />
      </View>
    );
  }
}

export default appReactRedux;
