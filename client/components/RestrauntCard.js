import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";

export default function RestrauntCard({ restraunt }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restraunt", { ...restraunt })}
    >
      <View
        style={{ shadowColor: themeColors.bgColor(0.2), shadowRadius: 7 }}
        className="mr-6 bg-gray-100 rounded-3xl shadow-lg"
      >
        <Image className="h-36 w-64 rounded-t-xl" source={restraunt.image} />
        <View className="px-3 pb-4 space-y-2 ">
          <Text className="text-lg font-bold">{restraunt.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../assets/images/fullStar.png")}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-green-700">{restraunt.stars} </Text>
              <Text className="text-gray-700">
                ({restraunt.reviews} reviews) .{" "}
                <Text className="font-semibold">{restraunt.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin height="15" width="15" stroke="gray" />
            <Text className="text-xs text-gray-700">
              {" "}
              Nearby . {restraunt.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
