import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { listContactsFetch } from "../../actions/app-actions";

class ListContacts extends Component {
  componentWillMount() {
    this.props.listContactsFetch();
  }

  render() {
    return (
      <View>
        <Text>Contatos</Text>
      </View>
    );
  }
}

export default connect(null, { listContactsFetch })(ListContacts);
