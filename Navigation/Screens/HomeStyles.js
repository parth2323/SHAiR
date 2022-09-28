import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 90,
    lineHeight: 88,
    fontWeight: "bold",
    width: "60%",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 25,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 20,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
    zIndex: 100,
    opacity: 0.7,
  },
  searchButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
