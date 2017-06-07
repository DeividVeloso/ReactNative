import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class Icone extends Component{
  render(){
    if(this.props.escolha){
      return(
        <View style={styles.icone}>
            <Text style={styles.txtJogador}>{this.props.jogador}</Text>
            { 
              this.props.escolha == 'pedra' ? <Image source={require(`../../imgs/pedra.png`)}></Image> 
              : this.props.escolha == 'tesoura' ?  <Image source={require(`../../imgs/tesoura.png`)}></Image>
              : this.props.escolha == 'papel' ?  <Image source={require(`../../imgs/papel.png`)}></Image>
              : <Image></Image>
            }
        </View>
      )
    }else{
      return false;
    }
  }
}

const styles = StyleSheet.create({
  icone:{
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador:{
    fontSize: 20
  }
});
export default Icone