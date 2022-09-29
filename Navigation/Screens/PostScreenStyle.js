import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderBottomColor: "lightgray",
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
    color: "#5b5b5b",
    fontSize: 18,
  },
  carModel: {
    color: "#5b5b5b",
    fontSize: 22,
    fontWeight: "bold",
  },
  carDescription: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    marginVertical: 5,
    fontSize: 18,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    color: "#5b5b5b",
    textDecorationLine: "underline",
    marginBottom: 5,
  },
});

export default styles;
