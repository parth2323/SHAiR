import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  Switch,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styles from "./PassengersStyles";

export default function PassengerScreen({ navigation }) {
  const [adults, setAdults] = useState(0);
  const [child, setChild] = useState(0);
  const [teenage, setTeenage] = useState(0);

  //   No Back Seat
  const [noBackSeatSwitchIsEnabled, setNoBackSeatSwitchIsEnabled] =
    useState(false);
  const toggleNoBackSeatSwitch = () =>
    setNoBackSeatSwitchIsEnabled((previousState) => !previousState);
  //  Booster Seat
  const [isBoosterSeatEnabled, setBoosterSeatEnabled] = useState(false);
  const toggleSwitchBoosterSeat = () =>
    setBoosterSeatEnabled((previousState) => !previousState);

  return (
    <View>
      <View>
        {/* <Text style={styles.title}>This is Passengers components. </Text> */}
        <View style={styles.row}>
          <View>
            <Text style={styles.ageType}>Adults</Text>
            <Text style={{ color: "#9d9d9d", fontSize: 15, marginBottom: 5 }}>
              Age Between 13 to 65
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(0, adults - 1))}
            >
              <Text style={{ fontSize: 20, color: "gray" }}>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 20 }}>{adults}</Text>

            <Pressable
              style={styles.button}
              onPress={() => setAdults(adults + 1)}
            >
              <Text style={{ fontSize: 20, color: "gray" }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.ageType}>Child</Text>
            <Text style={{ color: "#9d9d9d", fontSize: 15 }}>
              Age Between 7 to 12
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              style={styles.button}
              onPress={() => setChild(Math.max(0, child - 1))}
            >
              <Text style={{ fontSize: 20, color: "gray" }}>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 20 }}>{child}</Text>

            <Pressable
              style={styles.button}
              onPress={() => setChild(child + 1)}
            >
              <Text style={{ fontSize: 20, color: "gray" }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={styles.ageType}>Teenage</Text>
            <Text style={{ color: "#9d9d9d", fontSize: 15 }}>Age under 7</Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              style={styles.button}
              onPress={() => setTeenage(Math.max(0, teenage - 1))}
            >
              <Text style={{ fontSize: 20, color: "gray" }}>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 20 }}>
              {teenage}
            </Text>

            <Pressable
              style={styles.button}
              onPress={() => setTeenage(teenage + 1)}
            >
              <Text style={{ fontSize: 20, color: "gray" }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.rowBottom}>
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#9d9d9d",
                fontSize: 15,
                margin: 5,
                width: "40%",
              }}
            >
              <Text style={{ color: "#000" }}>Need a No Back seat:</Text> Max
              One!
            </Text>

            <Switch
              trackColor={{ false: "#9d9d9d", true: "green" }}
              thumbColor={noBackSeatSwitchIsEnabled ? "#fff" : "darkgray"}
              ios_backgroundColor="#fff"
              onValueChange={toggleNoBackSeatSwitch}
              value={noBackSeatSwitchIsEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#9d9d9d",
                fontSize: 15,
                margin: 5,
                width: "40%",
              }}
            >
              <Text style={{ color: "#000" }}>Need a Booster seat:</Text> Max
              One!
            </Text>
            <Switch
              trackColor={{ false: "#9d9d9d", true: "green" }}
              thumbColor={isBoosterSeatEnabled ? "#fff" : "darkgray"}
              ios_backgroundColor="#fff"
              onValueChange={toggleSwitchBoosterSeat}
              value={isBoosterSeatEnabled}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
