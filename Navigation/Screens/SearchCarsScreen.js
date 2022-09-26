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
//import RangeSlider, { Slider } from "react-native-range-slider-expo";
import Slider from "@react-native-community/slider";

import Post from "../../src/components/Post";
import feed from "../../assests/data/feed";

export default function SettingsScreen({ navigation }) {
  const [data, setData] = useState(feed);
  const [order, setOrder] = useState("ASC");

  const [modalVisible, setModalVisible] = React.useState(false); //Modal
  const [sliderValue, setSliderValue] = useState("0"); //Range SLider

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
              <Pressable
                style={styles.filterBackGround}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>
                  Ranger Slider: {sliderValue} KMs
                </Text>
                <View>
                  <Slider
                    style={{ width: 350, height: 40 }}
                    minimumValue={0}
                    maximumValue={1000}
                    onValueChange={(value) => setSliderValue(value)}
                    onSlidingComplete={() => console.log("Sliding complete")}
                    onSlidingStart={() => console.log("Sliding start")}
                    step={1}
                    value={sliderValue}
                    maximumTrackTintColor="background: linear-gradient(90deg, rgba(0,212,255,1) 35%, rgba(9,9,121,1) 100%);                    "
                    minimumTrackTintColor="linear-gradient(90deg, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                  />
                </View>
              </Pressable>
            </View>
          </Modal>
          <Button title="More Filters" onPress={() => setModalVisible(true)} />

          <StatusBar style="auto" />
        </View>
        <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
      </View>
    </View>
  );
}
