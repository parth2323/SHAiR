import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

const Post = (props) => {
  const post = props.post;

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default Post;
