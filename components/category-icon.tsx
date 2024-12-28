import { View, Text, TouchableHighlight } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { Category } from "@/types";
import { HotelIcon } from "lucide-react-native";

const CategoryIcon = ({
  item: { label },
  currentScreen,
  setCurrentScreen,
}: {
  item: Category;
  currentScreen: string;
  setCurrentScreen: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <TouchableHighlight
      onPress={() => setCurrentScreen(label.toLowerCase())}
      className="px-6 flex self-end gap-3"
    >
      <>
        <View className="flex gap-[2px] items-center">
          <HotelIcon
            size={26}
            color={`${
              currentScreen === label.toLowerCase() ? "black" : "gray"
            }`}
          />
          <Text className="text-sm font-semibold">{label}</Text>
        </View>
        {currentScreen === label.toLowerCase() ? (
          <View className="h-[3px] w-full bg-black rounded-full" />
        ) : (
          <View className="h-[3px] w-full bg-transparent rounded-full" />
        )}
      </>
    </TouchableHighlight>
  );
};

export default CategoryIcon;
