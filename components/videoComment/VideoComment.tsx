import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

interface VideoCommentProps {
  comment: {
    id: string;
    createdAt: string;
    comment: string;
    user: {
      name: string;
      image: string;
    };
    likes: number;
    dislikes: number;
    replies: number;
  };
}

const VideoComment = ({ comment }: VideoCommentProps) => {
  return (
    <View>
      <View style={styles.commentContainer}>
        <Image
          source={{ uri: comment.user.image }}
          style={styles.commentAvatar}
        />
        <Text style={{ color: "white" }}>{comment.comment}</Text>
      </View>
    </View>
  );
};

export default VideoComment;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },

  commentUserInfoTitle: {},

  commentAvatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },

  numberOfComments: {
    color: "white",
    marginBottom: 10,
    fontSize: 14,
  },
});
