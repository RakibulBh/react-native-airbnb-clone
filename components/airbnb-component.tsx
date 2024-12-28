import { View, Text, Image } from "react-native";
import React from "react";
import { Airbnb } from "@/types";
import { Star } from "lucide-react-native";

const AirBnbComponent = ({
  item: { images, location, host, dates, price, rating },
}: {
  item: Airbnb;
}) => {
  return (
    <View className="">
      <Image
        source={require("@/assets/images/airbnb-image.jpg")}
        className="w-full h-64 rounded-xl"
      />
      <View className="flex-row justify-between items-center mt-2">
        <Text className="font-semibold text-black text-lg">{location}</Text>
        <View className="flex-row gap-1 items-center">
          <Star color="black" fill="black" size={20} />
          <Text>{rating}</Text>
        </View>
      </View>
      <View className="text-sm mt-1">
        <Text className="text-gray-500">Hosted by {host}</Text>
        <Text className="text-gray-500">{dates}</Text>
      </View>
      <Text className="font-semibold mt-1">${price} night</Text>
    </View>
  );
};

export default AirBnbComponent;
