import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Screen01 from "./src/screen/Screen01";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Screen01 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
