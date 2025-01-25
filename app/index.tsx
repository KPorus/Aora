import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link
        href="/(tabs)/home"
        asChild
      >
        <Pressable >
          <Text >Profile</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default index;
