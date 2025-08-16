import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-xl font-bold text-blue-600">Home Screen - To Do List</Text>
      <Button title="Go to Commits" onPress={() => navigation.navigate('Commits')} />
    </View>
  );
}
