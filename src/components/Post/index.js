import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Post = (props) => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { postID: post.id });
  };

  return (
    <Pressable style={styles.container} onPress={goToPostPage}>
      <Image style={styles.image} source={{ uri: post.image }} />
      <Text style={styles.carOwner}>{post.carOwner}'s Car</Text>

      <Text>
        <Text style={styles.carModel}>{post.carModel}</Text>
        <Text style={styles.carModel}> {post.carYear}</Text>
      </Text>

      <Text style={styles.carDescription} numberOfLines={2}>
        {post.Description}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}/Day</Text>
        <Text style={styles.newPrice}> ${post.newPrice}/Day</Text>
      </Text>

      <Text style={styles.totalPrice}>${post.totalPrice}/Day</Text>
    </Pressable>
  );
};

export default Post;
