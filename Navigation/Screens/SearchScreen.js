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

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Destination Search Screen Component. </Text> */}
      <View style={{ height: 500 }}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: "Please Enter Your API key",
            language: "en",
          }}
        />
      </View>
    </View>
  );
}
