import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import { SafeAreaView } from "react-native";
import { Platform } from "react-native";
import { StatusBar } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "TajAlasfiyaa",
    description: "hererr ahs w",
    image: require("../assets/taj.jpg"),
  },
  {
    id: 2,
    title: "TajAlasfiyaa",
    description: "hererr ahs w",
    image: require("../assets/taj.jpg"),
  },
  {
    id: 14,
    title: "TajAlasfiyaa",
    description: "hererr ahs w",
    image: require("../assets/taj.jpg"),
  },
  {
    id: 23,
    title: "TajAlasfiyaa",
    description: "hererr ahs w",
    image: require("../assets/taj.jpg"),
  },
  {
    id: 1434,
    title: "TajAlasfiyaa",
    description: "hererr ahs w",
    image: require("../assets/taj.jpg"),
  },
  {
    id: 243,
    title: "TajAlasfiyaa",
    description: "hererr ahs w",
    image: require("../assets/taj.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log(item.title)}
          />
        )}
        ItemSeparatorComponent={<ListItemSeparator />}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
