import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Camera } from "expo-camera";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import awaitAsyncGenerator from "@babel/runtime/helpers/esm/awaitAsyncGenerator";

const Recordvideo = (props) => {
  const navigation = useNavigation();

  const cameraRef = useRef(null);

  const [video, setVideo] = useState(null);
  const [recording, setRecording] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    getPermission();
  }, [getPermission]);

  const getPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setHasPermission(true);
    }
  };

  const toogleRecord = () => {
    if (recording) {
      stopRecord();
    } else {
      startRecord();
    }
  };
  const startRecord = async () => {
    if (cameraRef.current) {
      setRecording(true);
      const recordedVideo = await cameraRef.current.recordAsync();
      setVideo(recordedVideo);
    }
  };

  const stopRecord = async () => {
    setRecording(false);
    cameraRef.current.stopRecording();
  };

  const saveVideo = async () => {
    //  let fileInfo = await FileSystem.getInfoAsync(video.uri);
    //
    //   navigation.navigate("CreatePost", { videoURL: video.uri });
    //TODO:fix bugs with saving
    const asset = await MediaLibrary.createAssetAsync(video.uri);
    if (asset) {
      navigation.navigate("CreatePost", { videoURL: asset.uri });
    }
    //   console.log(asset.uri);
    //}
    // } else {
    //   Alert.alert("Video too large please upload a shorter video");
    //   props.navigation.goBack();
    // }
  };

  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.responsiveBox}>
      <Camera
        ref={cameraRef}
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
          width: "100%",
        }}
      >
        {video && (
          <TouchableOpacity
            onPress={saveVideo}
            style={{
              padding: 20,
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ textAlign: "center", color: "#000" }}>Complete</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={toogleRecord}
          style={{
            padding: 20,
            width: "100%",
            backgroundColor: recording ? "#ef4f84" : "#4fef97",
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {recording ? "Stop" : "Record"}
          </Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  responsiveBox: {
    width: wp("100%"),
    height: hp("100%"),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Recordvideo;
