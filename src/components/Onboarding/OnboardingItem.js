import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

//export default OnboardingItem = ({ item }) => {
const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <View style={{ flex: 0.2 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    flex: 0.8,
    justifyContent: "center",
    height: 286,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 10,
    color: "#FFC23C",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#FFF9B0",
    fontSize: 22,
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
