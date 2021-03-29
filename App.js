import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import RootNavigation from "./src/navigation";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <RootNavigation />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
