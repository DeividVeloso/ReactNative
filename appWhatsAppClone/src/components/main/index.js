import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';
import TabBarMenu from '../tabbar-menu/';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

import ListChats from '../chats/list-chats';
import ListContacts from '../contacts/list-contacts';

export default class TabViewExample extends Component {
  state = {
    index: 0,
    routes: [{ key: 'first', title: 'Conversas' }, { key: 'second', title: 'Contatos' }],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} {...this.props} />;

  _renderScene = SceneMap({
    first: () => <ListChats {...this.props} />,
    //Passando o Navigate para a Lista de Contatos para que eu possa navegar para conversa.
    second: () => <ListContacts {...this.props} />, 
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
    flex: 1,
  },
});
