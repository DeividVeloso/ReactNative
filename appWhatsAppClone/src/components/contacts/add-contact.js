import React from "react";
import { connect } from "react-redux";
import { View, TextInput, Button } from "react-native";
import { bindActionCreators } from "redux";
import { modifyAddContact } from "../../actions/app-actions";
const AddContact = props => {
  console.log("DOIDERA", props);
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TextInput
          placeholder="E-mail"
          style={{ fontSize: 20, height: 45 }}
          onChangeText={props.modifyAddContact}
          value={props.app.addContactEmail}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Button title="Adicionar" color="#115E54" onPress={() => false} />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({ app: state.app });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ modifyAddContact }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
