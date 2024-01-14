import { View, ScrollView } from "react-native";
import React from "react";
import { categories } from "../constants";
import RestrauntItem from "./RestrauntItem";

export default function Catogories() {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          return <RestrauntItem category={category} key={index} />;
        })}
      </ScrollView>
    </View>
  );
}
