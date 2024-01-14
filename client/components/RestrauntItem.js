import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function RestrauntItem({ category }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const isActive = category.id === activeCategory;
  const btnClass = isActive ? " bg-gray-600 " : " bg-gray-200 ";
  const textClass = isActive
    ? " text-gray-800 font-semibold "
    : " text-gray-500 ";
  return (
    <View className="flex justify-center items-center mr-6">
      <TouchableOpacity
        onPress={() => setActiveCategory(category.id)}
        className={"p-1 rounded-full shadow bg-gray-200" + btnClass}
      >
        <Image style={{ height: 45, width: 45 }} source={category.image} />
      </TouchableOpacity>
      <Text className={"text-xs" + textClass}>hello</Text>
    </View>
  );
}
