import { View, Text } from "react-native";
import React from "react";
import { Search, SlidersHorizontal } from "lucide-react-native";

export default function TopNavigation() {
  return (
    <View className="flex-row items-center justify-between gap-2 p-5">
      {/* Search bar */}
      <View className="rounded-full p-6 flex-row gap-4 bg-white shadow-sm items-center w-80">
        <Search color={"black"} size={20} />
        <Text>Start your search</Text>
      </View>
      <View className="w-12 h-12 rounded-full border bg-transparent p-6 flex items-center justify-center">
        <SlidersHorizontal color="black" size={18} />
      </View>
    </View>
  );
}
