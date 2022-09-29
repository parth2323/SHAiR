import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";

// You can import from local files
import DropDownPicker from "react-native-dropdown-picker";

//export default function SearchMap() {
const ColorFilter = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([
    "italy",
    "spain",
    "barcelona",
    "finland",
  ]);
  const [items, setItems] = useState([
    { label: "Black", value: "Black" },
    { label: "White", value: "White" },
    { label: "Red", value: "Red" },
    { label: "Blue", value: "Blue" },
    { label: "Green", value: "Green" },
    { label: "Navy Blue", value: "Navy Blue" },
    { label: "Yellow", value: "Yellow" },
  ]);

  return (
    <View
      style={{
        width: "63%",
      }}
    >
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        theme="LIGHT"
        multiple={true}
        mode="BADGE"
        badgeDotColors={[
          "black",
          // "Brown",
          // "yellow",
          // "green",
          // "#e76f51",
          // "#8ac926",
          // "#00b4d8",
          // "#e9c46a",
        ]}
      />
    </View>
  );
};

export default ColorFilter;
