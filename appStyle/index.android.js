import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';

const styles = {
    main:{
      paddingTop:40
    },
    buttonStyle:{
      backgroundColor: '#48BBEC',
      padding: 10,
      borderColor:'#1D8EB8',
      borderWidth: 2,
      borderRadius: 8
    },
    textStyle:{
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center'
    }

}

const botaoPressionado = () =>{
    alert('botão pressionado');
}

export default class App extends Component {
  render() {
    const { main, buttonStyle, textStyle} = styles;
    return (
      <View style={main}>

        <TouchableOpacity style={buttonStyle} onPress={botaoPressionado}>
            <Text style={textStyle}>Clique aqui</Text>
        </TouchableOpacity>

        {/*<Button 
          onPress={botaoPressionado}
          title="Clique aqui"
          color="#841584"
          accessibilityLabel="Clique aqui para ler as noticias"// usado para deficiênte visual conseguir ler a tela e saber que aqui tem um botão
        />*/}
      </View>
    );
  }
}

AppRegistry.registerComponent('appStyle', () => App);
