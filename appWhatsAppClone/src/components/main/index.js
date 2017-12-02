import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabViewAnimated, SceneMap } from "react-native-tab-view";
import TabBarMenu from "../tabbar-menu/";
const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width
};

import Chats from "../chats";
import Contacts from "../contacts";

export default class TabViewExample extends Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Conversas" },
      { key: "second", title: "Contatos" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    first: Chats,
    second: Contacts
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
