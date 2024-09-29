import { StyleSheet } from "react-native";

const cardStyle = StyleSheet.create({
  card: {
    marginBottom: 15,
    justifyContent: "center",
    width: "auto",
    height: 250,
    borderColor: "lightgrey",
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
    marginVertical: 24,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: "black",
    width: 120,
    height: 40,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection:"row",
  }
});

export default cardStyle;