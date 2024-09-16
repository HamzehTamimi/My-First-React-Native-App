import { StyleSheet } from "react-native";

const searchBarStyle = StyleSheet.create({
  search: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 4,
    borderLeftColor: "lightgrey",
    borderRightColor: "lightgrey",
    borderTopColor: "lightgrey",
    borderBottomColor: "black",
    borderRadius: 8,
    fontSize: 18,
    height: 50,
    marginHorizontal: 16,
    marginTop: 8,
    textAlign: "center"
  }
});

export default searchBarStyle;