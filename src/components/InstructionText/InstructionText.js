import { View, Text } from "react-native";
import React from "react";
import styles from "./InstructionText.styles";

export default function InstructionText({children, style}) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  );
}
