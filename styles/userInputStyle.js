import { StyleSheet } from "react-native";

const userInputStyle = StyleSheet.create({
  input: {
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
    paddingLeft: 10,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
  button: {
    backgroundColor: "black",
    width: 250,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    marginTop: 20,
  }, 
  text: {
    color: "white",
    fontSize: 18,
  },
  flexy: {
    flexDirection: "row", 
    flexWrap: "wrap" 
  },
  inputFlex: {
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
    paddingLeft: 10,
    marginHorizontal: 10,
    width: "45%"
  },
});

export default userInputStyle;