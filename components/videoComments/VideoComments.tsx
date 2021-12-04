import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import comments from "../../assets/data/comments.json";
import VideoComment from "../videoComment/VideoComment";


interface VideoCommentsProps {}

const VideoComments = (props: VideoCommentsProps) => {
  return (
    <BottomSheetFlatList
      showsVerticalScrollIndicator={false}
      data={comments}
      renderItem={({ item }) => <VideoComment comment={item} />}
    />
  );
};

export default VideoComments;

const styles = StyleSheet.create({
  container: {},
});
