import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import SmsListener from 'react-native-android-sms-listener'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = { textCpf: '', token: '' }
    let subscription = SmsListener.addListener(message => {
      var value = message.body;
      var numberPattern = /\d+/g;
      value = value.match(numberPattern).join([]);
      this.setState({ token: value })
    })
  }

  _handleText(e) {
    if (e.length <= 14) {
      this.setState({ textCpf: this._handleCPF(e) })
    }
  }

  _handleCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    return cpf
  }

  _handleSMS(e) {
    this.setState({ token: e })
  }

  render() {
    return (
      <View  style={styles.view}>
        <TextInput
          placeholder={'   .   .   -  '}
          value={this.state.textCpf}
          keyboardType={'numeric'}
          onChangeText={(e) => this._handleText(e)}
        />
        <TextInput 
          placeholder={'Token'}
          value={this.state.token}
          keyboardType={'numeric'}
          onChangeText={(e) => this._handleSMS(e)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    flex:1
  }
});
