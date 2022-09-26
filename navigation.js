import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";
import Icon from "react-native-ico-material-design";

import HomeScreen from "./src/screens/Home";
import SearchResultsScreen from "./src/screens/SearchResults";
import DestinationSearchScreen from "./src/screens/DestinationSearchScreen";
import Passengers from "./src/screens/Passengers";

import Post from "./src/components/Post";
import feed from "./assests/data/feed";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
        {/* <Post post={post1} /> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen /> */}
        {/* <Passengers /> */}
      </SafeAreaView>
    </>
  );
};

export default App;
