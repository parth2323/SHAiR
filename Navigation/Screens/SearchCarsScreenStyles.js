import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 60,
  },

  row: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    height: 40,
    padding: 10,

    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRangeSliderText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  filterBackGround: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;
