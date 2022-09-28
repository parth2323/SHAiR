import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-ionicons";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import SearchCarsScreen from "./Screens/SearchCarsScreen";
import PassengerScreen from "./Screens/PassengerScreen";
import SearchScreen from "./Screens/SearchScreen";
import ExploreScreen from "./Screens/ExploreScreen";

//Screen names
const homeName = "Home";
const detailsName = "Car Details";
const passengers = "Passengers";
const search = "Search";
const explore = "Explore";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === detailsName) {
              iconName = focused ? "car" : "car-outline";
            } else if (rn === passengers) {
              iconName = focused ? "body" : "body-outline";
            } else if (rn === search) {
              iconName = focused ? "search" : "search-outline";
            } else if (rn === explore) {
              iconName = focused ? "map" : "map-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={explore} component={ExploreScreen} />
        <Tab.Screen name={search} component={SearchScreen} />
        <Tab.Screen name={passengers} component={PassengerScreen} />
        <Tab.Screen name={detailsName} component={SearchCarsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
