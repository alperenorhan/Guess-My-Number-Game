import { View, Text } from "react-native";
import React from "react";
import styles from "./InstructionText.styles";

export default function InstructionText({children}) {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  );
}
