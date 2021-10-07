import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function Categories() {
  const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick-Up",
    },
    {
      image: require("../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../assets/images/desserts.png"),
      text: "Desserts",
    },
    {
      image: require("../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../assets/images/splash.png"),
      text: "Splash ",
    },
  ];
  return (
    <View style={{ backgroundColor: "white", marginTop: "5px" }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={{ padding: "15px", alignItems: "center" }} key={index}>
            <Image
              source={item.image}
              style={{ width: "50px", height: "40px", resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
