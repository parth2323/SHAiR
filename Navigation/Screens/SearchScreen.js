//LINE:30 :- Add your own API key..
//Use this link to get your Google API key: https://support.google.com/googleapi/answer/6158862?hl=en

import React from "react";
import {
  StyleSheet,
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
          styles={autoCompleteStyles}
          onPress={(data, details = null) => {
            console.log(data, details);
            navigation.navigate("Passengers");
          }}
          query={{
            key: " ENTER AN API KEY",
            language: "en",
          }}
        />
      </View>
    </View>
  );
}

const autoCompleteStyles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
  },
  listView: {
    fontSize: 30,
    borderColor: "#c8c7cc",
    borderWidth: 1,
    borderRadius: 2,
  },
});
