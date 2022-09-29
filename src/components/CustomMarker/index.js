import React from "react";
import { Text, View } from "react-native";
import { Marker } from "react-native-maps";

const CustomMarker = (props) => {
  const { coordinate, newPrice } = props;
  return (
    <View>
      <Marker coordinate={coordinate}>
        <View
          style={{
            backgroundColor: "#E9E9E9",
            padding: 5,
            borderRadius: 10,
            borderWidth: 1,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>${newPrice}</Text>
        </View>
      </Marker>
    </View>
  );
};

export default CustomMarker;
