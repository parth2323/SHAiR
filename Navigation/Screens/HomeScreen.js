import React from "react";
import { Text, View, ImageBackground, Pressable, Button } from "react-native";
import styles from "./HomeStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function MainScreen({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={require("../../assests/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate("Search")}
        >
          <Ionicons name="md-search" size={30} color="black" />
          <Text style={styles.searchButtonText}>Where are you going? </Text>
        </Pressable>

        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Explore")}
        >
          <Text style={styles.buttonText}>Find Near By</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
