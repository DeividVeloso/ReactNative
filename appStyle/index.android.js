import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image
} from 'react-native';

const styles = {
    main:{
      paddingTop:40
    },
    styleImage:{
       justifyContent: 'center'
    },
    styleText:{
      backgroundColor: 'red'
    }
}

export default class App extends Component {
  render() {
    const { main , styleImage, styleText} = styles;
    return (
      <View style={main}>
        <Image style={styleImage} source={ require('./imgs/uvas.png') } >
            <Text style={styleText}>Legenda para a foto</Text>
        </Image>

         {/*<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
               style={{width: 400, height: 400}}/>*/}
      </View>
    );
  }
}

AppRegistry.registerComponent('appStyle', () => App);
