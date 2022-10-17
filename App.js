import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGame from "./src/screens/StartGame/StartGame";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.15,
  },
});
