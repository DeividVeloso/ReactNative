import React from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { TabBar } from "react-native-tab-view";
import { resetNewContact } from "../../actions/app-actions";

const TabMenu = props => {
  const onPressAdd = () => {
    props.resetNewContact();
    props.navigation.navigate("AddContact");
  };

  return (
    <View style={{ backgroundColor: "#115E54", elevation: 4, marginBottom: 6 }}>
      <StatusBar backgroundColor="#114D44" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <View
          style={{
            height: 50,
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20, marginLeft: 20 }}>
            WhatsApp Clone
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginRight: 20 }}>
          <View style={{ justifyContent: "center", width: 50 }}>
            <TouchableOpacity onPress={onPressAdd}>
              <Image source={require("../../imgs/adicionar-contato.png")} />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              onPress={() =>
                firebase
                  .auth()
                  .signOut()
                  .then(resp => props.navigation.navigate("Login"))
              }
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TabBar {...props} style={{ backgroundColor: "#115E54", elevation: 0 }} />
    </View>
  );
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ resetNewContact }, dispatch);
export default connect(null, mapDispatchToProps)(TabMenu);
