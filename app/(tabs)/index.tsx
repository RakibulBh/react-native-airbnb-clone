import DisplayTotalPriceFIlter from "@/components/display-total-price-filter";
import TopNavigation from "@/components/top-nav";
import { Categories } from "@/constants";
import { Category } from "@/types";
import { HotelIcon } from "lucide-react-native";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CategoryIcon = ({ item: { label } }: { item: Category }) => {
  return (
    <View className="px-6 flex self-end gap-3">
      <View className="flex gap-[2px] items-center">
        <HotelIcon color="black" size={26} />
        <Text className="text-sm font-semibold">{label}</Text>
      </View>
      <View className="h-[3px] w-full bg-black rounded-full" />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <View className="h-screen mt-12">
      <View className="h-42 flex justify-between blur-sm border-b border-gray-200">
        <TopNavigation />
        <FlatList
          data={Categories}
          horizontal
          renderItem={({ item }) => <CategoryIcon item={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.label}
        />
      </View>
      <View className="p-5">
        <DisplayTotalPriceFIlter />
      </View>
    </View>
  );
}
