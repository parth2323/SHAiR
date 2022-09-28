import React from "react";
import {
  Text,
  FlatList,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
import styles from "./ExploreScreenStyles";
import MapView from "react-native-maps";

import Ionicons from "@expo/vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello Explore...</Text>
      <MapView style={styles.map} />
    </View>
  );
}
