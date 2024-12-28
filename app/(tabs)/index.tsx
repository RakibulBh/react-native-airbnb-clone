import TopNavigation from "@/components/top-nav";
import { Categories } from "@/constants";
import { Category } from "@/types";
import { HotelIcon } from "lucide-react-native";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CategoryIcon = ({ item: { label } }: { item: Category }) => {
  return (
    <View className="px-8 flex self-end gap-3">
      <View className="flex gap-[2px] items-center">
        <HotelIcon color="black" size={34} />
        <Text className="text-sm font-semibold">{label}</Text>
      </View>
      <View className="h-[4px] w-full bg-black rounded-full" />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-screen">
      <View className="h-48 bg-gray-200 flex justify-between">
        <TopNavigation />
        <FlatList
          data={Categories}
          horizontal
          renderItem={({ item }) => <CategoryIcon item={item} />}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.label}
        />
      </View>
    </SafeAreaView>
  );
}
