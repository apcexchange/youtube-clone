import React from "react";
import { View, Text, Image, SafeAreaView, Dimensions } from "react-native";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Foundation,
} from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import Colors from "../constants/Colors";
import { color } from "react-native-reanimated";

const Stack = createNativeStackNavigator<RootStackParamList>();

const { width, height } = Dimensions.get("screen");
const logo = require("../assets/images/logo.png");

function HomeStack() {
  const CustomHeader = () => {
    return (
      <SafeAreaView style={{ backgroundColor: "#141414" }}>
        <View
          style={{
            margin: 10,
            padding: 5,
            alignItems: "center",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 100, height: 25 }}
            source={logo}
            resizeMode="contain"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: width / 2.6,
            }}
          >
            <Feather name="cast" size={30} color="white" />
            <AntDesign name="bells" size={30} color="white" />
            <AntDesign name="search1" size={30} color="white" />

            <FontAwesome name="user-circle-o" size={30} color="white" />
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
