import AirBnbComponent from "@/components/airbnb-component";
import CategoryIcon from "@/components/category-icon";
import DisplayTotalPriceFIlter from "@/components/display-total-price-filter";
import TopNavigation from "@/components/top-nav";
import { AirBnbs, Categories } from "@/constants";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState<string>("cabins");

  return (
    <View className="h-screen mt-12">
      <View className="h-42 flex justify-between blur-sm border-b border-gray-200">
        <TopNavigation />
        <FlatList
          data={Categories}
          horizontal
          renderItem={({ item }) => (
            <CategoryIcon
              setCurrentScreen={setCurrentScreen}
              currentScreen={currentScreen}
              item={item}
            />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.label}
        />
      </View>
      <View className="p-5">
        <FlatList
          ListHeaderComponent={<DisplayTotalPriceFIlter />}
          ListHeaderComponentClassName="mb-5"
          data={AirBnbs}
          renderItem={({ item }) => <AirBnbComponent item={item} />}
          ItemSeparatorComponent={() => <View className="h-12" />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.host}
        />
      </View>
    </View>
  );
}
