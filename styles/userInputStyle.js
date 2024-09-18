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
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
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
  inputsTop: {
    fontSize: 18,
    height: 50,
    marginHorizontal: 10,
    paddingLeft: 10,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderColor: "lightgrey",
    borderWidth: 2,
    backgroundColor: 'white'
  },
  inputsMiddle: {
    fontSize: 18,
    height: 50,
    marginHorizontal: 10,
    paddingLeft: 10,
    borderColor: "lightgrey",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
  inputsBottom: {
    fontSize: 18,
    height: 50,
    marginHorizontal: 10,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 4,
    borderLeftColor: "lightgrey",
    borderRightColor: "lightgrey",
    borderTopColor: "lightgrey",
    borderBottomColor: "black",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: 'white'
  }
});

export default userInputStyle;