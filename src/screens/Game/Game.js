import { View, Text } from "react-native";
import React from "react";
import styles from "./Game.styles";

import Title from "../../components/Title/Title";

export default function Game() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}
