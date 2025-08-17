import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate into your tab layout (which includes Home)
      router.replace("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-1 justify-center items-center bg-green-500">
      <Image
        source={require("../../assets/logo.png")}
        className="w-36 h-36 mb-4"
      />
      <Text className="text-white text-lg font-bold">
        Loading, please wait...
      </Text>
    </View>
  );
}
