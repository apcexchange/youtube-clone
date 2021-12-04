import React, { useRef } from "react";
import { View, Text, Image } from "react-native";
import video from "../../assets/data/video.json";
import VideoListItem from "../../components/videoListItem";
import videos from "../../assets/data/videos.json";
import { Video } from "expo-av";

interface VideoPlayerProps {
  videoURI: string;
  thumbnailURI: string;
}

function VideoPlayer(props: VideoPlayerProps) {
  const { videoURI, thumbnailURI } = props;
  const onRefAssigned = () => {
    console.log("video loade");
  };
  return (
    <View>
      <Video
        source={{ uri: videoURI }}
        posterSource={{ uri: thumbnailURI }}
        posterStyle={{ resizeMode: "cover" }}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
        useNativeControls={true}
        usePoster={false}
        resizeMode="contain"
      />
    </View>
  );
}

export default VideoPlayer;
