import { View, Text } from "react-native";
import React from "react";
import styles from "./NumberContainer.styles";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
