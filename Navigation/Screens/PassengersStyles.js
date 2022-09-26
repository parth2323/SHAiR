import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //   title: {
  //     fontSize: 30,
  //   },
  ageType: {
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },

  rowBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },

  button: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#9d9d9d",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;