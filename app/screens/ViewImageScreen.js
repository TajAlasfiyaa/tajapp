import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class ViewImageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="close"
          color={"white"}
          size={40}
          style={styles.closeIcon}
        />
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={"red"}
          size={40}
          style={styles.deleteIcon}
        />
        <Image
          style={styles.mainImage}
          source={require("../assets/chair.jpg")}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    top: 25,
    left: 20,
    position: "absolute",
  },
  deleteIcon: {
    top: 25,
    right: 20,
    position: "absolute",
  },
});
