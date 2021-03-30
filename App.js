import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import RootNavigation from "./src/navigation";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createUser } from "./src/graphql/mutations";
import { getUser } from "./src/graphql/queries";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
function App() {
  useEffect(() => {
    const fetchUser = async () => {
      //get current user
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      //check the existance

      if (!userInfo) {
        return;
      }

      const getUserRes = await API.graphql(
        graphqlOperation(getUser, { id: userInfo.attributes.sub })
      );

      if (getUserRes.data.getUser) {
        console.log("User already exists!");
        return;
      }
      // then -> add new user
      let URL = `https://avatars.dicebear.com/api/bottts/${userInfo.username}.svg`;
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageURL: URL,
      };

      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    };

    fetchUser();
  }, []);
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

export default withAuthenticator(App);
