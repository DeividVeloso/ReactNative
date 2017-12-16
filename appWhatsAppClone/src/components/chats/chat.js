import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/app-actions';

class Chat extends Component {
  state = { message: '' };

  onChangeMessage(message) {
    this.setState({ message });
  }
  onSubMitMessage() {
    const { name, email } = this.props.navigation.state.params.contact;

    this.props.sendMessage(this.state.message, name, email);
  }
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
          <TextInput
            value={this.state.message}
            onChangeText={message => this.onChangeMessage(message)}
            style={{ flex: 4, backgroundColor: '#fff', fontSize: 18 }}
          />
          <TouchableOpacity onPress={() => this.onSubMitMessage()}>
            <Image source={require('../../imgs/enviar_mensagem.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(null, { sendMessage })(Chat);
