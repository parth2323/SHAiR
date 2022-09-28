import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: "#F2F2F2",
    paddingVertical: 10,
    paddingHorizontal: -5,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  image: {
    aspectRatio: 1.3,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "black",
    padding: 10,
  },
  iconText: {
    fontSize: 20,
    paddingHorizontal: 1,
  },
  dataRow: {
    height: 100,
    marginLeft: 25,
  },
  carTypeText: { fontSize: 20, fontWeight: "bold", padding: 10 },

  buttonColorFilter: {
    backgroundColor: "#e7e7e7",
    height: "auto",
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonColorFilterText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    height: "auto",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRangeSliderText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  filterBackGround: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 10,
    height: "auto",
  },
  buttonRangeText: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 11,
  },
});

export default styles;
