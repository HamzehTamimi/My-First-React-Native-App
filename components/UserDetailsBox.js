import { View, Text } from "react-native";
import userDetailsStyle from '../styles/userDetailsStyle';

export default function AddButton({ label, value }) {
  return (
    <>
    <Text style={userDetailsStyle.label}>{label}</Text>
    <View style={userDetailsStyle.card}>
      <Text style={userDetailsStyle.text}>{value}</Text>
    </View>
    </>
  )
};

