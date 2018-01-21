import React, { Component } from "react";
import { View, Text, ListView, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";
import { chatsUserFetch } from "../../actions/app-actions";

class ListChats extends Component {
  componentWillMount() {
    this.props.chatsUserFetch();
    this.createDataSource(this.props.listChats);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.listChats);
  }

  createDataSource(listChats) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(listChats);
  }

  renderRow(chat) {
    console.log("RENDERROW", this.props);
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Chat", {
            contact: { name: chat.nome, email: chat.email }
          })
        }
      >
        <View
          style={{
            flex: 1,
            padding: 20,
            borderBottomWidth: 1,
            borderColor: "#ccc"
          }}
        >
          <Text style={{ fontSize: 25 }}>{chat.nome}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={(chat) => this.renderRow(chat)}
      />
    );
  }
}

const mapStateToProps = state => {
  const listChats = _.map(state.listChats, (val, uid) => {
    return {
      ...val,
      uid
    };
  });
  return {
    listChats: listChats
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ chatsUserFetch }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListChats);
