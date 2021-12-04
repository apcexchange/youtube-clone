import React from "react";
import { ScrollView, View, FlatList } from "react-native";
import VideoListItem from "../components/videoListItem";
import videos from "../assets/data/videos.json";

export default function HomeScreen() {
  return (
      <View>
        <FlatList
          data={videos}
          renderItem={({ item }) => <VideoListItem video={item} />}
        />
      </View>
  );
}
