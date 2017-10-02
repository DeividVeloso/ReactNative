import React, { Component } from "react";
import { AppRegistry, Text, View, Button, Image  } from "react-native";
//import { TabNavigator, TabBarBottom } from "react-navigation";

import Container from "./src/components/Container";
import Home from "./src/components/Home";
import Chat from "./src/components/Chat";
import Menu from "./src/components/Menu";
import Login from  "./src/components/Login";

const screens =  {
  Home,
  Container,
  Chat,
  Menu
};

// const btnStart = require();
// const btnDoubt = require();
// const btnRole = require();
// const btnMenu = require();

const ViewFlex = (props) => <View style={{ flex: 1 }} {...props} />;

class TabNavigator extends Component {
  state = {
    loggedIn: false,
    currentScreen: 'Home'
  };

  changeScreen = (key) => this.setState({ currentScreen: key });

  onLogin = () => this.setState({ loggedIn: true });

  onLogout = () => this.setState({ loggedIn: false });

  render() {
    if (!this.state.loggedIn) {
      return <Login onLogin={this.onLogin} />;
    }
    
    const Screen = screens[this.state.currentScreen];

    return (
      <ViewFlex>
        <ViewFlex>
          <Screen
            navigation={{ navigate: this.changeScreen }}
            onLogout={this.onLogout}
          />
        </ViewFlex>
        <ViewFlex style={{ flexDirection: 'row' }}>
          <Button  onPress={() => this.changeScreen('Home')} title="home"></Button>
          <Button  onPress={() => this.changeScreen('Chat')} title="chat"></Button>
          <Button  onPress={() => this.changeScreen('Menu')} title="menu"></Button>
        </ViewFlex>
      </ViewFlex>
    )
  }
}

AppRegistry.registerComponent("pocs", () => TabNavigator);


// class TabNavigator extends Component {
//   state = {
//     loggedIn: false,
//     currentScreen: 'Home'
//   };

//   changeScreen = (key) => this.setState({ currentScreen: key });

//   onLogin = () => this.setState({ loggedIn: true });

//   onLogout = () => this.setState({ loggedIn: false });

//   render() {
//     if (!this.state.loggedIn) {
//       return <Login onLogin={this.onLogin} />;
//     }
    
//     const Screen = screens[this.state.currentScreen];

//     return (
//       <ViewFlex>
//         <ViewFlex>
//           <Screen
//             navigation={{ navigate: this.changeScreen }}
//             onLogout={this.onLogout}
//           />
//         </ViewFlex>
//         <ViewFlex style={{ flexDirection: 'row' }}>
//           <TouchableOpacity  onPress={() => this.changeScreen('Home')} title="home"></TouchableOpacity>
//           <TouchableOpacity  onPress={() => this.changeScreen('Chat')} title="chat"></TouchableOpacity>
//           <TouchableOpacity  onPress={() => this.changeScreen('Menu')} title="menu"></TouchableOpacity>
//         </ViewFlex>
//       </ViewFlex>
//     )
//   }
// }


// const pocs = TabNavigator(
//   {
//     Home: { screen: Home },
//     Container: { screen: Container },
//     Chat: { screen: Chat },
//     Menu: { screen: Menu}
//   },
//   {
//     tabBarPosition: "bottom",
//     swipeEnabled: false,
//     tabBarComponent: ({ navigation, ...rest }) => (
//       <View>
//         <Button onPress={() => navigation.navigate('Home')} title="home" />
//         <Button onPress={() => navigation.navigate('Chat')} title="chat" />
//         <Button onPress={() => navigation.navigate('Menu')} title="menu" />
//       </View>
//     ),
//     tabBarOptions: {
//       indicatorStyle:{
//         display:'none'
//       }
//     }
//   }
// );

// AppRegistry.registerComponent("pocs", () => pocs);
