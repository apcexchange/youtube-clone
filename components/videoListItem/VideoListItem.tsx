import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./Styles";
import { useNavigation } from "@react-navigation/core";

type VideoListItemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    views: number;
    user: {
      name: string;
      image?: string;
    };
  };
};

export default function VideoListItem(props: VideoListItemProps) {
  const { video } = props;
  const navigation = useNavigation();

  const Minutes = Math.floor(video.duration / 60);
  const Seconds = video.duration % 60;

  let viewString = video.views.toString();
  if (video.views > 1_000_000) {
    viewString = (video.views / 1_000_000).toFixed(1) + "m";
  } else if (video.views > 1_000) {
    viewString = (video.views / 1_000).toFixed(1) + "k";
  }

  const openVideoPage = () => {
    navigation.navigate("VideoScreen", { id: video.id });
  };

  return (
    <Pressable onPress={openVideoPage} style={styles.container}>
      <View style={styles.videocard}>
        {/* thumbnail components*/}
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail,
          }}
        />

        <View style={styles.timerContainer}>
          <Text style={styles.time}>
            {Minutes}:{Seconds < 10 ? "0" : ""} {Seconds}
          </Text>
        </View>
      </View>

      {/* Title components*/}
      {/* Title row*/}

      <View style={styles.titleRow}>
        {/* Title avatar*/}

        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image,
          }}
        />

        {/* middle container*/}
        <View style={styles.middleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            {video.user.name} {viewString} {video.createdAt}
          </Text>
        </View>
        {/* middle icon */}
        <Entypo name="dots-three-vertical" size={18} color="white" />
      </View>
    </Pressable>
  );
}
