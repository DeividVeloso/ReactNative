import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { listContactsFetch } from '../../actions/app-actions';

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

const mapStateToProps = (state) => {
  console.log('state.app.contacts', state.app.contacts);
  const contacts = _.map(state.app.contacts, (val, uid) => ({ ...val, uid }));
  console.log('STATE', contacts);

  return {};
};

export default connect(mapStateToProps, { listContactsFetch })(ListContacts);
