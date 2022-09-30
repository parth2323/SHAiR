import * as React from "react";
//import { Text, View } from "react-native";

import Icon from "react-native-ico-material-design";
import MainContainer from "./Navigation/MainContainer";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";

function App() {
  return <MainContainer />;
}

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <Dummy />
//         {/* <Post post={post1} /> */}
//         {/* <SearchResultsScreen /> */}
//         {/* <DestinationSearchScreen /> */}
//         {/* <Passengers /> */}
//         {/* <SettingsScreen /> */}
//       </SafeAreaView>
//     </>
//   );
// };

export default App;
