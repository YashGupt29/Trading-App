import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Catogories from "../components/catogories";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-2 mb-1">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restraunts" className="flex-1 ml-2" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="25" width="25" stroke="gray" />
            <Text className="text-gray-600">Lucknow,UP</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full bg-white"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        <Catogories />
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
