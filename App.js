import * as React from "react";
import HomeScreen from "./src/screens/Home";
import Onboarding from "./src/components/Onboarding/Onboarding";
import FloatingButton from "./src/components/FloatingButton/FloatingButton";

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

// function App() {
//   return <MainContainer />;
// }

const App: () => React$Node = () => {
  return (
    <>
      <MainContainer />
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FloatingButton />
      </SafeAreaView> */}
    </>
  );
};
export default App;
