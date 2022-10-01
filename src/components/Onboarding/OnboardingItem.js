import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <View style={{ backgroundColor: "white" }}>
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
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    // marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
