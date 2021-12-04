import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import video from "../../assets/data/video.json";
import VideoListItem from "../../components/videoListItem";
import styles from "./styles";
import videos from "../../assets/data/videos.json";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";

function VideoScreen() {
  const Minutes = Math.floor(video.duration / 60);
  const Seconds = video.duration % 60;

  let viewString = video.views.toString();
  if (video.views > 1_000_000) {
    viewString = (video.views / 1_000_000).toFixed(1) + "m";
  } else if (video.views > 1_000) {
    viewString = (video.views / 1_000).toFixed(1) + "k";
  }

  return (
    <View style={{ backgroundColor: "#141414", flex: 1 }}>
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.videoUrl} />

      {/** Video info */}
      <View style={styles.videoInfoContainer}>
        <Text style={styles.videoTag}>{video.tags}</Text>
        <Text style={styles.videoTitle}>{video.title}</Text>
        <Text style={styles.videoSubtitle}>
          {video.user.name} {viewString} {video.createdAt}
        </Text>
      </View>

      {/**Action list */}
      <View style={styles.actionListContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.actionListItem}>
            <AntDesign name="like2" size={30} color="lightgrey" />
            <Text style={styles.actionText}> {video.likes} </Text>
          </View>

          <View style={styles.actionListItem}>
            <AntDesign name="dislike2" size={30} color="lightgrey" />
            <Text style={styles.actionText}> {video.dislikes} </Text>
          </View>

          <View style={styles.actionListItem}>
            <Entypo name="forward" size={30} color="lightgrey" />
            <Text style={styles.actionText}> {video.dislikes} </Text>
          </View>

          <View style={styles.actionListItem}>
            <MaterialIcons name="add-link" size={30} color="lightgrey" />
            <Text style={styles.actionText}> {video.likes} </Text>
          </View>

          <View style={styles.actionListItem}>
            <AntDesign name="download" size={30} color="lightgrey" />
            <Text style={styles.actionText}> {video.likes} </Text>
          </View>

          <View style={styles.actionListItem}>
            <AntDesign name="save" size={30} color="lightgrey" />
            <Text style={styles.actionText}> {video.likes} </Text>
          </View>
        </ScrollView>
      </View>

      {/** Video userInfo */}

      <View style={styles.userInfoContainer}>
        <Image source={{ uri: video.user.image }} style={styles.avatar} />

        <View style={styles.userInfoTitleContainer}>
          <Text style={styles.userInfoTitle}> {video.user.name}</Text>
          <Text style={styles.userInfoSubscribers}>
            {video.user.subscriber} subscribers
          </Text>
        </View>

        <View style={styles.subscribeButtonContainer}>
          <Text style={styles.subscribeButton}> Subscribe</Text>
        </View>
      </View>

      {/** comments */}

      <Text style={styles.numberOfComments}> comments 4444 </Text>

      <View style={styles.commentContainer}>
        <Image
          source={{ uri: video.user.image }}
          style={styles.commentAvatar}
        />
        <View>
          <Text style={styles.commentUserInfoTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            sequi dolorem debitis
          </Text>
        </View>
      </View>

      {/** Recomended videos */}
    </View>
  );
}

const VideoScreenWithRecomendations = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
        ListHeaderComponent={VideoScreen}
      />
    </SafeAreaView>
  );
};

export default VideoScreenWithRecomendations;
