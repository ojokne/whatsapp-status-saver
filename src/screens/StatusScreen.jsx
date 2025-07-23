import { Text, View } from "react-native";
import Header from "../components/header";

export default function StatusScreen() {
  return (
    <View style={{ flex: 1}}>
      <Header/>
      <Text>Status Screen</Text>
    </View>
  );
}
