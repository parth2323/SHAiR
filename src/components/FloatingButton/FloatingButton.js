import {
  Text,
  View,
  StyleSheet,
  Animated,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { AntDesign, Fontisto, Ionicons } from "@expo/vector-icons";

export default class FloatingButton extends React.Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5,
    }).start();
    this.open = !this.open;
  };
  render() {
    const dateStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -90],
          }),
        },
      ],
    };

    const carStyle = {
      transform: [
        { scale: this.animation },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -120],
          }),
        },
      ],
    };

    const colorStyle = {
      transform: [
        { scale: this.animation },
        {
          translateX: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 120],
          }),
        },
      ],
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"],
          }),
        },
      ],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.secondary, carStyle]}>
            <Ionicons name="location-outline" size={30} color="#F02A4B" />
            <Text style={{ color: "#F02A4B", fontWeight: "bold" }}>
              Choose Location
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.secondary, dateStyle]}>
            <Fontisto name="date" size={30} color="#F02A4B" />
            <Text style={{ color: "#F02A4B", fontWeight: "bold" }}>
              Choose Date
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[styles.button, styles.secondary, colorStyle]}>
            <Ionicons name="car" size={30} color="#F02A4B" />
            <Text style={{ color: "#F02A4B", fontWeight: "bold" }}>
              Choose Car
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <AntDesign name="plus" size={34} color="#FFF" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 94,
  },
  button: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    shadowRadius: 10,
    justifyContent: "center",
    shadowColor: "#F02A4B",
    shadowOpacity: 0.6,
    shadowOffset: { height: 10 },
  },
  secondary: {
    width: 150,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#FFF",
  },
  menu: {
    backgroundColor: "#F02A4B",
  },
});
