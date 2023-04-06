import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";

export default class ViewImageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            width: 40,
            height: 40,
            top: 30,
            left: 10,
            backgroundColor: "#eb676c",
            position: "absolute",
          }}
        ></View>
        <View
          style={{
            width: 40,
            height: 40,
            top: 30,
            right: 10,
            backgroundColor: "#75cbc6",
            position: "absolute",
          }}
        ></View>
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
});
