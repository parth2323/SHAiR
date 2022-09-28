import React, { useState } from "react";
import styles from "./styles";
import { Text, View, Pressable, Image } from "react-native";

import Slider from "@react-native-community/slider";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-ionicons";
import { DataTable } from "react-native-paper";
import SearchMap from "../../../Navigation/Screens/SearchMap";

import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

const Filter = (props) => {
  const [sliderValue, setSliderValue] = useState("0"); //Range SLider
  return (
    <View>
      <View
        style={{
          marginBottom: 20,
          zIndex: "1",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F2F2F2",
          height: 80,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>By Car color: </Text>
        <SearchMap />
      </View>

      {/* Range Slider */}
      <Pressable
        style={styles.filterBackGround}
        onPress={() => setModalVisible(false)}
      >
        <Text style={styles.buttonText}>Ranger Slider:</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.buttonRangeText}>{sliderValue} KMs/Day</Text>
          <Text style={styles.buttonRangeText}>
            {Math.round(sliderValue * 1.60934)} Miles/Day
          </Text>
        </View>

        <View>
          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={1000}
            onValueChange={(value) => setSliderValue(value)}
            onSlidingComplete={() => console.log("Sliding complete")}
            onSlidingStart={() => console.log("Sliding start")}
            step={10}
            value={sliderValue}
            maximumTrackTintColor="background: linear-gradient(90deg, rgba(0,212,255,1) 35%, rgba(9,9,121,1) 100%);                    "
            minimumTrackTintColor="linear-gradient(90deg, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
          />
        </View>
      </Pressable>

      {/* Car Type */}
      <View>
        <View style={styles.container}>
          <Text style={styles.carTypeText}>Car Types</Text>
          <DataTable>
            <DataTable.Row style={styles.dataRow}>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>Hatchback</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>Wagon</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>Sedan</Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.dataRow}>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>new SUV</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>Crossover</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>SUV</Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.dataRow}>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>Coupe</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>Covertible</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>Sports Car</Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.dataRow}>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>EV-Sedan</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>EV-Coupe</Text>
                </View>
              </DataTable.Cell>
              <DataTable.Cell>
                <View>
                  <Image
                    style={styles.image}
                    source={require("../../../assests/images/truck.png")}
                  />
                  <Text style={styles.iconText}>EV-SUV</Text>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
      </View>
    </View>
  );
};

export default Filter;
