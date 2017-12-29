import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import _ from "lodash";
import { compose, withState, withHandlers } from "recompose";
import RadioButton from "./radio-button";

const styles = StyleSheet.create({
  viewQuestion: {
    flex: 1,
    padding: 10,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  }
});

const enhancer = compose(
  withState("selectedItem", "setSelectedItem", ""),
  withHandlers({
    handleOnSelected: props => id => {
      props.setSelectedItem(() => id);
      if (props.onSelected) props.onSelected(id);
    }
  })
);

const RadioForm = props => {
  const renderButtons = options => {
    return _.map(_.values(options), (value, key) => {
      return (
        <RadioButton
          key={key}
          stylesLabel={{ color: "red", fontSize: 18 }}
          text={`${key} ${value}`}
          selectedItem={props.selectedItem}
          onPress={props.handleOnSelected}
          id={`${key}`}
        />
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.viewQuestion}>
        <Text>{props.question}</Text>
        {renderButtons(props.options)}
      </View>
    </ScrollView>
  );
};

export default enhancer(RadioForm);
