import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import sortItem from "./sortItem";

const index = (props) => {
  return (
    <FlatList data={sortItem}>
      <Text>{sortItem.name}</Text>
    </FlatList>
  );
};

export default index;

const styles = StyleSheet.create({});
