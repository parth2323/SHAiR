import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";

const NavigateToDetails = (props) => {
  props.navigation.navigate("DestinationSearchScreen");
  props.navigation.navigate("SearchResultsScreen");
};

const HomeScreen = (props) => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assests/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Pressable
          style={styles.searchButton}
          onPress={() => NavigateToDetails(props)}
        >
          <Ionicons name="md-search" size={32} color="black" />
          <Text style={styles.searchButtonText}>Where are you going? </Text>
        </Pressable>

        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => NavigateToDetails(props)}
        >
          <Text style={styles.buttonText}>Explore Near By</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
