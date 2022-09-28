import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const listTab = [
  { status: "All" },
  { status: "White" },
  { status: "Black" },
  { status: "Blue" },
];

const data = [
  {
    name: "Civic",
    color: "Black",
  },
  {
    name: "E-CLass",
    color: "White",
  },
  {
    name: "XF",
    color: "Blue",
  },
  {
    name: "Model S",
    color: "Red",
  },
  {
    name: "X7",
    color: "BLack",
  },
  {
    name: "A-Class",
    color: "White",
  },
  {
    name: "Accord",
    color: "Blue",
  },
  {
    name: "Sonata",
    color: "Green",
  },
  {
    name: "Fusion",
    color: "Navy Blue",
  },
  {
    name: "F150",
    color: "Red",
  },
  {
    name: "Malibu",
    color: "Blue",
  },
  {
    name: "Cruize",
    color: "Black",
  },
];

const Dummy = () => {
  const [status, setStatus] = useState("All");
  const setStatusFilter = (status) => {
    setStatus(status);
  };
  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <View style={styles.itemBody}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View
          style={[
            styles.itemStatus,
            { backgroundColor: item.status === "black" ? "#e58" : "#69c" },
          ]}
        >
          <Text>{item.status}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text
              style={
                (styles.txtTab, status === e.status && styles.txtTabActive)
              }
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={data}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Dummy;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  btnTab: {
    width: "100%",
    width: Dimensions.get("window").width / 4.3,
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    borderColor: "#E7E7E7",
    borderWidth: 1,
  },
  txtTab: {
    fontSize: 30,
    color: "black",
  },
  btnTabActive: {
    backgroundColor: "#E8E8E8",
  },
  txtTabActive: {
    color: "red",
    fontSize: 20,
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  itemBody: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
