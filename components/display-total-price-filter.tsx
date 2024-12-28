import { View, Text } from "react-native";
import React from "react";

export default function DisplayTotalPriceFIlter() {
  return (
    <View className="rounded-xl border-2 border-gray-300 p-3 flex-row justify-between">
      <View className="gap-2">
        <Text className="font-semibold text-black text-2xl">
          Display total price
        </Text>
        <Text className="text-gray-400 text-xl">
          Include all fees, before taxes
        </Text>
      </View>
    </View>
  );
}
