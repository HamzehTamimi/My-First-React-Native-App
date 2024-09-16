import { StyleSheet } from "react-native";

const userDetailsStyle = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
  container:{
    alignItems: "center",
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16
  },
  header: {
    fontSize: 30,
    textAlign: "center",
  }
});

export default userDetailsStyle;