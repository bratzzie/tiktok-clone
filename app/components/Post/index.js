import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import VideoPlayer from "expo-video-player";
import styled from "styled-components/native";
import { PlayIcon } from "../Icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Brands from "react-native-vector-icons/FontAwesome5";
const index = (props) => {
  const ContainerHeight = Dimensions.get("window").height - 20;
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const onPlayPausePress = () => {
    console.warn("Post");
  };

  const like = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };
  return (
    <Container style={{ height: ContainerHeight }}>
      <VideoWrapper>
        <MyVideoPlayer
          pauseIcon={PlayIcon}
          videoProps={{
            videobackground: "transparent",
            isLooping: true,
            shouldPlay: true,
            resizeMode: "cover",
            source: {
              uri: post.videoURL,
            },
          }}
          inFullscreen={true}
          showFullscreenButton={false}
          showControlsOnLoad={false}
          disableSlider={true}
          videobackground="transparent"
        />
      </VideoWrapper>
      <NavWrapepr>
        <RightWrapper>
          <ImageWrapper>
            <Avatar
              source={{
                uri: post.user.userURL,
              }}
            />
          </ImageWrapper>
          <IconsWrapper>
            <TouchableOpacity onPress={like}>
              <FontAwesome5
                name={"heart"}
                size={35}
                color={isLiked ? "red" : "#fff"}
              />
              <Num>{post.likes}</Num>
            </TouchableOpacity>
            <FontAwesome5
              name={"comment-dots"}
              size={35}
              color={"#fff"}
              style={{ marginTop: 10 }}
            />
            <Num>{post.comments}</Num>
            <FontAwesome5
              name={"reply"}
              size={35}
              color={"#fff"}
              style={{ marginTop: 10 }}
            />
            <Num>{post.shares}</Num>
          </IconsWrapper>
        </RightWrapper>
        <BottomWrapper>
          <View>
            <Name>@{post.user.username}</Name>
            <Desc>{post.description}</Desc>
            <SongDesc>
              <FontAwesome5Brands name={"itunes-note"} size={20} color="#fff" />
              <SongName>{post.song}</SongName>
            </SongDesc>
          </View>

          <SongImage
            source={{
              uri: post.songImage,
            }}
          />
        </BottomWrapper>
      </NavWrapepr>
    </Container>
  );
};

export default index;
const Container = styled.View`
  width: 100%;
  background-color: transparent;
`;
const VideoWrapper = styled.View`
  position: absolute;
  top: 0px;
  bottom: 0;
  right: 0;
  left: 0;
`;
const MyVideoPlayer = styled(VideoPlayer)``;

const NavWrapepr = styled.View`
  height: 100%;
  justify-content: flex-end;
  position: relative;
`;

const BottomWrapper = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: flex-end;
  justify-content: space-between;
`;
const Name = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Desc = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 100;
  margin-bottom: 10px;
`;

const SongDesc = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SongName = styled.Text`
  margin-left: 10px;
  color: #fff;
  font-size: 16px;
`;
const SongImage = styled.Image`
  width: 45px;
  height: 45px;
  border-width: 5px;
  border-style: solid;
  border-color: #3a404a;
  border-radius: 25px;
`;
const RightWrapper = styled.View`
  flex-direction: column;
  align-self: flex-end;
  padding: 10px;
  height: 300px;
  justify-content: space-around;
  align-items: center;
  margin-right: 5px;
`;
const ImageWrapper = styled.View``;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 25px;
`;
const IconsWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
`;
const Num = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  margin-top: 5px;
`;
