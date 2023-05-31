import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

const UserDetailsScreen = ({ route }) => {
  const picture = route.params.item.Picture;
  const name = route.params.item["Display name"];
  const title = route.params.item.Title;
  const country = route.params.item["Country/Region"];

  return (
    <View>
      <Image source={{ uri: picture }} style={styles.avatar} />
      <Text>{name}</Text>
      <Text>{title}</Text>
      <Text>{country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
  },
});

export default UserDetailsScreen;
