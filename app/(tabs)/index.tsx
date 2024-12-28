import AirBnbComponent from "@/components/airbnb-component";
import CategoryIcon from "@/components/category-icon";
import DisplayTotalPriceFIlter from "@/components/display-total-price-filter";
import TopNavigation from "@/components/top-nav";
import { AirBnbs, Categories } from "@/constants";
import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";
import { useCallback, useMemo, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Map } from "lucide-react-native";
import { Airbnb, Category } from "@/types";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState<string>("cabins");
  const [sheetClose, setSheetClose] = useState<boolean>(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    setSheetClose(index === 0);
  }, []);

  const MapButton = useMemo(() => {
    if (sheetClose) return null;

    return (
      <TouchableHighlight
        onPress={() => bottomSheetRef.current?.snapToIndex(0)}
        className="py-3 px-4 rounded-full bg-black/75 absolute bottom-[150px] left-1/2 -translate-x-1/2 flex-row items-center justify-center text-white gap-2"
      >
        <>
          <Text className="text-white font-bold">Map</Text>
          <Map color="white" />
        </>
      </TouchableHighlight>
    );
  }, [sheetClose]);

  const renderCategoryItem = useCallback(
    ({ item }: { item: Category }) => (
      <CategoryIcon
        setCurrentScreen={setCurrentScreen}
        currentScreen={currentScreen}
        item={item}
      />
    ),
    [currentScreen]
  );

  const renderAirbnbItem = useCallback(
    ({ item }: { item: Airbnb }) => <AirBnbComponent item={item} />,
    []
  );

  const ListHeader = useMemo(() => <DisplayTotalPriceFIlter />, []);

  return (
    <View className="h-screen mt-12">
      <View className="h-42 flex justify-between blur-sm border-b border-gray-200">
        <TopNavigation />
        <FlatList
          data={Categories}
          horizontal
          renderItem={renderCategoryItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.label}
          removeClippedSubviews={true}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
        />
      </View>
      <GestureHandlerRootView className="bg-blue-100">
        {/* <MapView provider={PROVIDER_GOOGLE} className="w-full h-full" /> */}
        <BottomSheet
          style={{
            borderRadius: 60,
          }}
          snapPoints={useMemo(() => ["26%"], [])}
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          enableContentPanningGesture={true}
          enableOverDrag={false}
        >
          <BottomSheetView className="rounded-xl">
            <View
              style={{
                paddingHorizontal: 20,
                paddingTop: sheetClose ? 80 : 20,
              }}
            >
              <FlatList
                ListHeaderComponent={ListHeader}
                ListHeaderComponentClassName="mb-5"
                data={AirBnbs}
                renderItem={renderAirbnbItem}
                ItemSeparatorComponent={useCallback(
                  () => (
                    <View className="h-12" />
                  ),
                  []
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.host}
                removeClippedSubviews={true}
                initialNumToRender={5}
                maxToRenderPerBatch={5}
                windowSize={5}
              />
            </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>

      {MapButton}
    </View>
  );
}
