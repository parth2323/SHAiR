import React from "react";
import {
  Text,
  FlatList,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styles from "./SearchScreenStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello Explore...</Text>
    </View>
  );
}
