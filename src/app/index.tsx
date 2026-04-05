import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import "../../global.css";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-3xl font-bold underline text-red-500">Edit src/app/index.tsx to edit this screen.</Text>
      <Link href={"/about"}>About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
