import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, View } from "react-native";
import Post from "../../components/Post";

import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
        setPosts(response?.data?.listPosts?.items);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height - 20}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

export default Home;
