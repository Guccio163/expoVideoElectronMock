import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";
import { View } from "react-native";

export default function HomeScreen() {
  const sourceURL1 =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  const videoPlayer = useVideoPlayer(sourceURL1, (player) => {
    player.muted = true;
    player.play();
  });

  return (
    <View
      style={{
        alignItems: "center",
        width: 800,
        maxWidth: 800,
        height: 600,
      }}
    >
      {/* <video src={sourceURL1} controls muted width="200" height="200" /> */}
      <VideoView
        allowsFullscreen
        style={{ height: 300, width: 300 }}
        player={videoPlayer}
        nativeControls
        playsInline
        crossOrigin="anonymous"
      />
    </View>
  );
}
