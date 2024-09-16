import { Button, StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function AddButton({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} ><Text style={styles.text}>+</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: 60,
    height: 60,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    bottom: 13,
    right: 16,
    borderRadius: 13,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
  },
});

