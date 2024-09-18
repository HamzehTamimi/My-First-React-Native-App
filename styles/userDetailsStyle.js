import { StyleSheet } from "react-native";

const userDetailsStyle = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  container:{
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: 16
  },
  text: {
    fontSize: 18,
    paddingLeft: 5,
    paddingVertical: 10
  },
  card: {
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 8,
    fontSize: 18,
    height: 50,
    marginHorizontal: 16,
    marginTop: 8,
    textAlign: "center",
    backgroundColor: 'white',
    width: "auto",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 35,
    textAlign: "center"
  }
});

export default userDetailsStyle;