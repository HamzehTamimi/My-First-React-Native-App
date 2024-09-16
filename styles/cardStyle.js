import { StyleSheet } from "react-native";

const cardStyle = StyleSheet.create({
card: {
    backgroundColor: "#fafafa",
    marginBottom: 15,
    justifyContent: "center",
    width: "90%",
    height:250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0.2,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    shadowOffset: {width: -2, height: 4},
    elevation: 6,
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
    marginVertical: 24,
    marginHorizontal: "auto",
  },
  button: {
      backgroundColor: "black",
      width: 120,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      borderRadius: 30,
    },
    buttonText:{
      color: "white",
      fontSize: 14,
    } 
});

export default cardStyle;