import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

class Chat extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 50,
          backgroundColor: '#eee4dc',
          padding: 10,
        }}
      >
        <View style={{ flex: 1, paddingBottom: 20 }} />
        <View style={{ flexDirection: 'row', height: 60 }}>
          <TextInput style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }} />
          <TouchableOpacity onPress={() => false}>
            <Image source={require('../../imgs/enviar_mensagem.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Chat;