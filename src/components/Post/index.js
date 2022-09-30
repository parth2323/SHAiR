import React, { useState } from "react";
import { Text, View, Image, Pressable, TextInput } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Post = (props) => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { postID: post.id });
  };

  //const [searchItem, setSearchItem] = useState("");

  return (
    <View>
      <View>
        {/* <TextInput
          style={styles.searchFilter}
          type="text"
          placeholder="By Car Modal"
          onChange={(event) => {
            setSearchItem(event.target.value);
          }}
        /> */}
      </View>
      <Pressable style={styles.container} onPress={goToPostPage}>
        <Image style={styles.image} source={{ uri: post.image }} />
        <Text style={styles.carOwner}>{post.carOwner}'s Car</Text>

        <Text>
          <Text style={styles.carModel}>
            {post.car} {post.car_model}
          </Text>
          <Text style={styles.carModel}> {post.car_model_year}</Text>
        </Text>

        <Text style={styles.carDescription} numberOfLines={2}>
          {post.Description}
        </Text>

        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice}/Day</Text>
          <Text style={styles.newPrice}> ${post.newPrice}/Day</Text>
        </Text>

        <Text style={styles.totalPrice}>{post.price}/Day</Text>
      </Pressable>
    </View>
  );
};

export default Post;
