import { View, Text } from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import React, { useState } from "react";

function DisplayTotalPriceFIlter() {
  const [on, setOn] = useState<boolean>(false);

  return (
    <View className="rounded-xl border-2 border-gray-300 p-3 flex-row justify-between items-center">
      <View className="gap-2">
        <Text className="font-semibold text-black text-2xl">
          Display total price
        </Text>
        <Text className="text-gray-400 text-xl">
          Include all fees, before taxes
        </Text>
      </View>
      <SwitchToggle
        switchOn={on}
        containerStyle={{
          width: 66,
          height: 38,
          borderRadius: 25,
        }}
        onPress={() => setOn(!on)}
        circleColorOff="#FFFFFF"
        circleColorOn="#FFFFFF"
        backgroundColorOn="#6D6D6D"
        backgroundColorOff="#C4C4C4"
      />
    </View>
  );
}

export default DisplayTotalPriceFIlter;
