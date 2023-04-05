import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  View,
  Dimensions,
  Text,
  useWindowDimensions,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView className="border-l-blue-500" style={styles.container}>
      <View style={styles.main} />
      <View style={{ flex: 1 / 3, flexDirection: "row" }}>
        <
        <View
          style={{
            backgroundColor: "black",
            height: 140,
            width: 140,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "green",
            height: 140,
            width: 140,
          }}
        ></View>
        <View
          style={{
            backgroundColor: "yellow",
            height: 140,
            width: 140,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  main: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: "90%",
  },
});
