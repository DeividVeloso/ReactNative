import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native';

const gerarNumeroRadom = () =>{
    var numero_random = Math.random();
    numero_random = Math.floor(numero_random * 10);
    alert(numero_random);
}

const App = () => {
  return (
    <View>
        <Text>Meu segundo App</Text>
        <Button 
          title="Gerar número aleatório"
          onPress={gerarNumeroRadom}
        />
    </View>
  );
};

//Registrando o App o meu componente
//Primeiro o nome do projeto onde estou registrando e segundo o componente a onde vou registrar.
AppRegistry.registerComponent('appNumRadom', () => App);