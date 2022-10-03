import {
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
  Animated,
} from "react-native";
import React, { Component } from "react";
import slides from "./slides";

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]; //Prev., Current & Next Slide

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};
export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    marginTop: 5,
    paddingVertical: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: "#FFF",
    marginHorizontal: 5,
  },
});
