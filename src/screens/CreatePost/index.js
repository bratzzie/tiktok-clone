import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Storage, API, graphqlOperation, Auth } from "aws-amplify";
import { createPost } from "../../graphql/mutations";
import styled from "styled-components/native";
import { useRoute, useNavigation } from "@react-navigation/native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const index = () => {
  const [description, setDescription] = useState("");
  const route = useRoute();
  const [videoKey, setVideoKey] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    uploadToStorage(route.params.videoURL);
  }, []);
  const uploadToStorage = async (imagePath) => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      // const filename = `${uuidv4()}.mp4`;
      const filename = "filename.mp4";
      const s3Response = await Storage.put(filename, blob);
      setVideoKey(s3Response.key);
    } catch (error) {
      console.error(error);
    }
  };
  const publish = async () => {
    if (!videoKey) {
      console.warn("There is no video to be uploaded");
      return;
    }
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const newPost = {
        videoURL: videoKey,
        description: description,
        userID: userInfo.attributes.sub,
        songID: "43f7699d-a6c1-4fa1-b868-9c6cbe1f1a9b",
      };
      const response = await API.graphql(
        graphqlOperation(createPost, { input: newPost })
      );
      navigation.navigate("Home", { screen: "Home" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Section>
      <Input
        value={description}
        onChangeText={setDescription}
        numberOfLines={5}
        placeholder={"This is really awesome app!!!"}
      />
      <Button onPress={publish}>
        <View>
          <Text style={{ color: "#fff" }}>Publish</Text>
        </View>
      </Button>
    </Section>
  );
};

export default index;

const Section = styled.View`
  flex: 1;
  justify-content: space-between;
`;
const Input = styled.TextInput`
  width: 100%;
  height: 150px;
  background-color: #fff;
`;
const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #ff2b5a;
  margin: 10px;
  height: 40px;
  justify-content: center;
`;
