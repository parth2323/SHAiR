import { StyleSheet, View, Text, FlatList } from "react-native";
import React from "react";
import slides from "./slides";
import OnboardingItem from "./OnboardingItem";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounch={false}
      />
    </View>
  );
};

export default Onboarding;

//Everything was on Onboarding Item screen, not on this one...

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
