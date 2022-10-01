import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderBottomColor: "#393e46",
    borderBottomWidth: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  carOwner: {
    marginTop: 10,
    color: "#000",
    fontSize: 20,
    color: "white",
  },
  carModel: {
    color: "#f96d00",
    fontSize: 28,
    fontWeight: "bold",
  },
  carDescription: {
    color: "white",
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    color: "white",
    marginVertical: 2,
    fontSize: 28,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
    padding: 5,
  },
  oldPrice: {
    fontSize: 20,
    color: "#eccccc",
    textDecorationLine: "line-through",
  },
  totalPriceTxt: {
    fontSize: 18,
  },
  totalPrice: {
    width: 220,
    fontSize: 18,
    color: "white",
    textDecorationLine: "underline",
    margin: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
    fontSize: 30,
    padding: 10,
    fontWeight: "bold",
  },
  carBasics: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  carBasicTxt: {
    fontSize: 20,
    color: "white",
    justifyContent: "space-between",
  },
});

export default styles;
