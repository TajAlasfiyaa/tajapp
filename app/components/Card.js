import { StyleSheet, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, image }) => (
  <View style={styles.card}>
    <View>
      <Image style={styles.image} resizeMode="cover" source={image} />
    </View>
    <View style={styles.detail}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
    </View>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  detail: { padding: 20 },
  title: {},
  subTitle: {
    color: "green",
  },
});
