import React from "react";
import {
  View,
  Text,
  Dimensions,
  Touchable,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import styled from "styled-components/native";
import { PlayIcon } from "../Icons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome5Brands from "react-native-vector-icons/FontAwesome5";
const index = () => {
  const onPlayPausePress = () => {
    console.warn("Post");
  };
  return (
    <Container>
      <VideoWrapper>
        <MyVideoPlayer
          pauseIcon={PlayIcon}
          videoProps={{
            videobackground: "transparent",
            isLooping: true,
            shouldPlay: true,
            resizeMode: "cover",
            source: {
              uri:
                "https://assets.mixkit.co/videos/preview/mixkit-mysterious-pale-looking-fashion-woman-at-winter-39878-large.mp4",
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
                uri:
                  "https://images.pexels.com/photos/3410386/pexels-photo-3410386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
              }}
            />
          </ImageWrapper>
          <IconsWrapper>
            <FontAwesome5 name={"heart"} size={35} color={"#fff"} />
            <Num>123234532</Num>
            <FontAwesome5
              name={"comment-dots"}
              size={35}
              color={"#fff"}
              style={{ marginTop: 10 }}
            />
            <Num>123234532</Num>
            <FontAwesome5
              name={"reply"}
              size={35}
              color={"#fff"}
              style={{ marginTop: 10 }}
            />
            <Num>123234532</Num>
          </IconsWrapper>
        </RightWrapper>

        <BottomWrapper>
          <View>
            <Name>@sailormoon</Name>
            <Desc>Look at her!</Desc>
            <SongDesc>
              <FontAwesome5Brands name={"itunes-note"} size={20} color="#fff" />
              <SongName>DALI - ムーンライト伝説</SongName>
            </SongDesc>
          </View>

          <SongImage
            source={{
              uri:
                "https://cdn.vox-cdn.com/thumbor/ff2XWi9DZb5-of-rsAut62vmQAc=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19917090/vlcsnap_2016_01_11_14h29m32s843.png",
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
  flex-direction: column;
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
  border-radius: 25;
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
const SongImage = styled.Image`
  width: 45px;
  height: 45px;
  border-width: 5px;
  border-style: solid;
  border-color: #3a404a;
  border-radius: 25;
`;
