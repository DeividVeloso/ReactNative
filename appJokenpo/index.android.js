import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';




class MeuComponente extends Component {
  render() {
    return (
      <View>
          {/*Recebendo a propriedade do PAI appJokenpo*/}
          <Text>{this.props.alteraTexto}</Text>
      </View>
    );
  }
}

class appJokenpo extends Component {

  constructor(props){
    super(props);
    //Declarando a variávelde estado para usar na aplicação
    this.state = { texto : 'Texto teste 2'};
  }

  alteraTextoFunc(){
    //Só podemos alterar uma variavel do state através dessa função
    //Passar sempre um objeto literal
    this.setState({texto : 'Outra coisa'});
  }
    
  render() {
    return (
      <View>
          {/*Passando como propriedade para o componente filho*/}
          <MeuComponente alteraTexto={this.state.texto}></MeuComponente>
          {/*usar a arrow function para não executar a função na hora que carrega a tela,
          e também para passar o this léxico para saber da onde chamar o this.setState, senão teriamosque dar um bind no contructor
          this.alteraTextoFunc = this.alteraTextoFunc.bind(this);
          */}
          <Button title='Troca Texto' onPress={() => this.alteraTextoFunc()}></Button>
      </View>
    );
  }
}


AppRegistry.registerComponent('appJokenpo', () => appJokenpo);
