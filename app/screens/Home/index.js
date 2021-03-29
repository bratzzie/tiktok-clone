import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import Post from "../../components/Post";
import posts from "../../data/posts";

const Home = () => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

export default Home;
