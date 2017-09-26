import React, { Component } from "react";
import { AppRegistry, Text, View, Button } from "react-native";
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
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={() => this.changeScreen('Home')} title="home" />
          <Button onPress={() => this.changeScreen('Chat')} title="chat" />
          <Button onPress={() => this.changeScreen('Menu')} title="menu" />
        </View>
      </ViewFlex>
    )
  }
}

AppRegistry.registerComponent("pocs", () => TabNavigator);

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
