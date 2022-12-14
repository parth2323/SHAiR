import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Pressable,
  Button,
  ScrollView,
} from "react-native";
import styles from "./HomeStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { places } from "../../assests/data/feed";
import Onboarding from "../../src/components/Onboarding/Onboarding";
import FloatingButton from "../../src/components/FloatingButton/FloatingButton";

export default function MainScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#31087B" }}>
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
      <FloatingButton />
      <Onboarding />
    </ScrollView>
  );
}
