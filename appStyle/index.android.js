import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const styles = {
    main:{
      backgroundColor: 'cornflowerblue',
      padding: 40
    }
}

const botaoPressionado = () =>{
    alert('botão pressionado');
}

export default class App extends Component {
  render() {
    const { main, contentOne, contentTwo, contentThree } = styles;
    return (
      <View style={main}>
        <Button 
          onPress={botaoPressionado}
          title="Clique aqui"
          color="#841584"
          accessibilityLabel="Clique aqui para ler as noticias"// usado para deficiênte visual conseguir ler a tela e saber que aqui tem um botão
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('appStyle', () => App);
