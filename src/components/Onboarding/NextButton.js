import { View, Text, TouchableOpacity } from "react-native";
import React, {useRef, useEffect} from "react";
import Svg, { Circle, G } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

const NextButton = (props) => {
  const size = 128;
  const strokewidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokewidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null); 

  return (
    <View>
      <Text>This is next button. </Text>
      <Svg width={size} height={size}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={center}
            cy={center}
            r={radius}
            strokewidth={strokewidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 25) / 100}
          />
        </G>
      </Svg>
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button={
    position: "absolute",
    backgroundColor: "#f4338f",
    borderRadius: 100,
    padding: 20,
  }
});
