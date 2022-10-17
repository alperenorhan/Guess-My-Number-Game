import { View, Text } from "react-native";
import React from "react"; 
import styles from "./Card.styles";

export default function Card({children}) {
  return (
    <View style={styles.inputContainer}>{children}</View>
  );
}
