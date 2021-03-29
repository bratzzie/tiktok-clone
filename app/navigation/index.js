import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./TabNav";

const Stack = createStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
