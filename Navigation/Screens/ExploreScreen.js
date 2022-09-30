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
//import MapView from "react-native-maps";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import CustomMarker from "../../src/components/CustomMarker";
import places from "../../assests/data/feed";

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <MapView style={styles.map} /> */}
      <MapView
        style={styles.map}
        region={{
          provider: { PROVIDER_GOOGLE },
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            coordinate={places.coordinate}
            newPrice={places.newPrice}
          />
        ))}
        <Marker coordinate={{ latitude: 28.391537, longitude: -16.6291304 }}>
          <View
            style={{
              backgroundColor: "#E9E9E9",
              padding: 5,
              borderRadius: 10,
              borderWidth: 1,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>$300</Text>
          </View>
        </Marker>
      </MapView>
    </View>
  );
}
