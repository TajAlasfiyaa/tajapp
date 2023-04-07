import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Yello jacket for sale </AppText>
        <AppText style={styles.subTitle}>$222</AppText>
      </View>
      <ListItem
        title={"TajAlasfiyaa Ishag"}
        subTitle={"25 Listener"}
        image={require("../assets/taj.jpg")}
      />
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
    //     borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 16,
  },
});
