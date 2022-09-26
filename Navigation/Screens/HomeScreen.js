import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
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
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <Ionicons name="md-search" size={32} color="black" />
          <Text style={styles.searchButtonText}>Where are you going? </Text>
        </Pressable>

        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn("Explore btn clicked!")}
        >
          <Text style={styles.buttonText}>Find Near By</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
