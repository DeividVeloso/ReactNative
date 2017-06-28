import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      margin: 10,
      padding: 10,
      borderWidth: 0.5,
      borderColor: '#999'

    },
    description:{
      alignItems:'flex-start',
      flex: 1,
      paddingLeft: 5
    },
    txtTitulo:{
        fontSize:18,
        color: 'blue',
        marginBottom: 5
    }
    
});

class Item extends Component {
  render() {
    return (
    <View style={Styles.container}> 
        <View>
          <Image style={{height: 100, width: 100}} source={{ uri: this.props.item.foto}} />
        </View>
        <View style={Styles.description}>
          <Text style={Styles.txtTitulo}>{this.props.item.titulo}</Text>
          <Text>{this.props.item.local_anuncio}</Text>
          <Text>{this.props.item.valor}</Text>
          <Text>{this.props.item.data_publicacao}</Text>
        </View>
        
    </View>);
  }
}

export default Item;
