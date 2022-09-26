import React, { useState } from "react";
import {
  Text,
  FlatList,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SuggestionRow } from "./SuggestionRow";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearchScreen = (props) => {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          {/* <Text style={styles.title}>Destination Search Screen Component. </Text> */}
          <View style={{ height: 500 }}>
            <GooglePlacesAutocomplete
              placeholder="Where are you going?"
              onPress={(data, details = null) => {
                console.log(data, details);
              }}
              query={{
                key: "AIzaSyAma1TirTgTA4og-cBAoAuktxhgeSSublU",
                language: "en",
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DestinationSearchScreen;
