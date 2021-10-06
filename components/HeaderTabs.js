import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" btnColor="black" textColor="white" />
      <HeaderButton text="Pickup" btnColor="white" textColor="black" />
    </View>
  );
}

const HeaderButton = ({ text, btnColor, textColor }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: btnColor,
        paddingVertical: "6px",
        paddingHorizontal: "16px",
        borderRadius: 30,
      }}
    >
      <Text style={{ color: textColor, fontSize: "15", fontWeight: "900" }}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
