import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Scrollable,
  SafeAreaView,
  StatusBar,
  Pressable,
  Button,
  Modal,
  TextInput,
} from "react-native";
import styles from "./SearchCarsScreenStyles";
import Slider from "@react-native-community/slider";

import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Post from "../../src/components/Post";
import Filter from "../../src/components/Filter";
import feed from "../../assests/data/feed";
import carData from "../../assests/data/carData";

export default function SettingsScreen({ navigation }) {
  const [data, setData] = useState(feed);
  const [order, setOrder] = useState("ASC");

  const [modalVisible, setModalVisible] = React.useState(false); //Modal

  //Sorting Feature
  const sorting = (feed) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a.carModel.toLowerCase() > b.carModel.toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a.carModel.toLowerCase() < b.carModel.toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <View>
      <View>
        <View style={styles.row}>
          <Pressable style={styles.button} onPress={() => sorting("carModel")}>
            <Text style={styles.buttonText}>By Car Name</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => console.warn("Explore btn clicked!")}
          >
            <Text style={styles.buttonText}>By Make Year</Text>
          </Pressable>

          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.container}>
              <Button
                title="< Go Back"
                onPress={() => setModalVisible(false)}
              />
              {/* Filter Screen component */}
              <Filter />
            </View>
          </Modal>
          <Button title="More" onPress={() => setModalVisible(true)} />

          <StatusBar style="auto" />
        </View>

        <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
      </View>
    </View>
  );
}
