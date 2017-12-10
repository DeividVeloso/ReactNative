import React from "react";
import { connect } from "react-redux";
import { View, TextInput, Button, Text } from "react-native";
import { bindActionCreators } from "redux";
import { modifyAddContact, addContact } from "../../actions/app-actions";
const AddContact = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput
          placeholder="E-mail"
          style={{ fontSize: 20, height: 45 }}
          onChangeText={props.modifyAddContact}
          value={props.app.addContactEmail}
        />
        {props.app.success ? (
          <Text style={{ color: "green", fontSize: 20 }}>
            {props.app.success}
          </Text>
        ) : (
          <Text style={{ color: "red", fontSize: 18 }}>{props.app.error}</Text>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="Adicionar"
          color="#115E54"
          onPress={() => props.addContact(props.app.addContactEmail)}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({ app: state.app });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ modifyAddContact, addContact }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
