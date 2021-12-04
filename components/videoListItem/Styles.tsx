import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  
  videocard: {},

  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
  },

  time: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  timerContainer: {
    backgroundColor: "#00000099",
    height: 25,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 5,
    bottom: 5,
  },

  titleRow: {
    flexDirection: "row",
    padding: 10,
  },

  middleContainer: {
    marginHorizontal: 16,
    flex: 1,
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },

  subtitle: {
    color: "gray",
    fontSize: 16,
  },
});
