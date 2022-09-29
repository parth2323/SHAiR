import React from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import Post from "../../src/components/Post";
import { useRoute } from "@react-navigation/native";

import places from "../../assests/data/feed";

const PostScreen = (props) => {
  const route = useRoute();
  const post = places.find((place) => place.id === route.params.postID);

  return (
    <ScrollView>
      <View>
        <Pressable onPress={() => navigation.navigate("Search")}>
          <Text>Go Back</Text>
        </Pressable>
      </View>
      <View>
        <Post post={post} />
        <Text
          style={{
            fontSize: 18,
            lineHeight: 26,
            marginHorizontal: 20,
          }}
        >
          Car Seats:{post.carSeats}
        </Text>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 26,
            marginHorizontal: 20,
          }}
        >
          {post.LongDescription}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PostScreen;
