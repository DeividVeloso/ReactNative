import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ListView
} from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { sendMessage, chatUserFetch } from "../../actions/app-actions";

class Chat extends Component {
  state = { message: "" };

  componentWillMount() {
    this.props.chatUserFetch(this.props.navigation.state.params.contact.email);
    this.createDataSource(this.props.listChat);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.listChat);
  }

  createDataSource(listChat) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(listChat);
  }

  onChangeMessage(message) {
    this.setState({ message });
  }
  onSubMitMessage() {
    const { name, email } = this.props.navigation.state.params.contact;

    this.props.sendMessage(this.state.message, name, email);
    this.setState({message: ""})
  }

  renderRow(chat) {
    if (chat.tipo === "e") {
      return (
        <View
          style={{ alignItems: "flex-end", marginVertical: 5, marginLeft: 40 }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#000",
              padding: 10,
              backgroundColor: "#dbf5b4",
              elevation: 1
            }}
          >
            {chat.message}
          </Text>
        </View>
      );
    }
    return (
      <View
          style={{ alignItems: "flex-start", marginVertical: 5, marginRight: 40 }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#000",
              padding: 10,
              backgroundColor: "#f7f7f7",
              elevation: 1
            }}
          >
            {chat.message}
          </Text>
        </View>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 50,
          backgroundColor: "#eee4dc",
          padding: 10
        }}
      >
        <View style={{ flex: 1, paddingBottom: 20 }}>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </View>

        <View style={{ flexDirection: "row", height: 60 }}>
          <TextInput
            value={this.state.message}
            onChangeText={message => this.onChangeMessage(message)}
            style={{ flex: 4, backgroundColor: "#fff", fontSize: 18 }}
          />
          <TouchableOpacity onPress={() => this.onSubMitMessage()}>
            <Image source={require("../../imgs/enviar_mensagem.png")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const listChat = _.map(state.chat, (val, uid) => {
    return { ...val, uid };
  });

  return { listChat: listChat };
};
export default connect(mapStateToProps, { sendMessage, chatUserFetch })(Chat);
