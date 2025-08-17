import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Home Screen - To Do List
      </Text>
      <Button title="Go to Commits" onPress={() => router.push("/(stack)/commits")} />
    </View>
  );
}
