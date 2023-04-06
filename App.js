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
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    <>
      <WelcomeScreen />
    </>
  );
}

const styles = StyleSheet.create({});
