import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={style.background}
      source={require("../assets/jacket.jpg")}
      blurRadius={10}
    >
      <View style={{ top: "-50%", alignItems: "center" }}>
        <Image style={style.icon} source={require("../assets/favicon.png")} />
        <AppText>hello world</AppText>
      </View>
      <View style={style.buttonCotainer}>
        <AppButton children={"register"} color="secondary" />
        <AppButton children={"login"} />
      </View>
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonCotainer: {
    padding: 15,
    width: "100%",
  },
  icon: {
    width: 70,
    height: 70,
  },
});
export default WelcomeScreen;
