import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  StatusBar,
  TouchableOpacity,
  Image,
  View
} from "react-native";
import Camera from "react-native-camera";
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  overlay: {
    position: "absolute",
    padding: 16,
    right: 0,
    left: 0,
    alignItems: "center"
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  captureButton: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 40
  },
  typeButton: {
    padding: 5
  },
  flashButton: {
    padding: 5
  },
  buttonsSpace: {
    width: 10
  }
});
export default class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.camera = null;

    this._onBarCodeRead = this._onBarCodeRead.bind(this);

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto
      },
      isRecording: false
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Chat`
  });

  takePicture = () => {
    if (this.camera) {
      this.camera
        .capture()
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
  };

  get typeIcon() {
    let icon;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      icon = require("../../assets/ic_camera_rear_white.png");
    } else if (this.state.camera.type === front) {
      icon = require("../../assets/ic_camera_front_white.png");
    }

    return icon;
  }

  _onBarCodeRead() {
    this.setState({ showCamera: false });
    Alert.alert("Barcode Found!", "Type: " + e.type + "\nData: " + e.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated hidden />
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureTarget={this.state.camera.captureTarget}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          defaultTouchToFocus
          mirrorImage={false}
          onBarCodeRead={this._onBarCodeRead}
        />
      </View>
    );
  }
}
