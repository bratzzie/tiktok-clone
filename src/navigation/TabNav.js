import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import add from "../../assets/add.png";
import { Image } from "react-native";
import CameraScreen from "../screens/Camera/CameraScreen";
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: "#000",
        },
        activeTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"home"} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"search"} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={CameraScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image source={add} style={{ height: 35, resizeMode: "contain" }} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"comment-alt"} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"user"} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
