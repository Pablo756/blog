import React from "react";
import { Text, StyleSheet } from "react-native";

export const IndexScreen = () => {
  return <Text style={styles.text}>Home Screen</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});
