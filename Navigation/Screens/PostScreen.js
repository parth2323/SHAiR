import React from "react";
import { Text, View, ScrollView, Pressable, Image } from "react-native";
import Post from "../../src/components/Post";
import { useRoute } from "@react-navigation/native";
import styles from "./PostScreenStyle";

import { DataTable } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import places from "../../assests/data/feed";

const PostScreen = ({ navigation }) => {
  const route = useRoute();
  const post = places.find((place) => place.id === route.params.postID);

  return (
    <ScrollView style={{ backgroundColor: "#393e46" }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: post.image }} />
        <Text>
          <Text style={styles.carOwner}>Car Owner: </Text>
          <Text
            style={{
              color: "#f96d00",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            {post.carOwner}
          </Text>
        </Text>
        <Text>
          <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 24 }}>
            {post.car}{" "}
          </Text>

          <Text style={styles.carModel}>{post.car_model}</Text>
          <Text style={styles.carModel}> {post.car_model_year}</Text>
        </Text>

        {/* <Text style={styles.carDescription} numberOfLines={2}>
          {post.Description}
        </Text> */}

        <Text style={styles.prices}>
          <Text style={styles.oldPrice}>${post.oldPrice}/Day</Text>
          <Text style={styles.newPrice}> ${post.newPrice}/Day</Text>
        </Text>

        <Text style={styles.totalPrice}>
          <Text style={styles.totalPriceTxt}>Total </Text>
          <Text style={styles.totalPrice}>{post.price}</Text>
        </Text>
        <View style={styles.carBasics}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            CAR BASICS:
          </Text>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell style={{ padding: 10 }}>
                <MaterialCommunityIcons
                  name="car-seat"
                  size={24}
                  color="#f96d00"
                />
                <Text style={styles.carBasicTxt}> 5 Seats</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <FontAwesome5 name="gas-pump" size={24} color="#f96d00" />
                <Text style={styles.carBasicTxt}> Gas(Regular)</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <MaterialCommunityIcons
                  name="car-door"
                  size={24}
                  color="#f96d00"
                />
                <Text style={styles.carBasicTxt}> 4 Doors</Text>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <Text style={{ color: "white", fontSize: 18 }}>
          {post.LongDescription}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PostScreen;
