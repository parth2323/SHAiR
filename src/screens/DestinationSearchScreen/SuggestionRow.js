import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const SuggestionRow = ({ item }) => (
  <Pressable style={styles.row}>
    <View style={styles.iconContainer}>
      <Ionicons name="md-location" size={25} color="black" />
    </View>
    <Text style={styles.locationText}>{item.description}</Text>
  </Pressable>
);

export default SuggestionRow;
