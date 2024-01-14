import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function RestrauntScreen() {
  const { params } = useRoute();
  return (
    <View>
      <Text>Restraunt Screen</Text>
    </View>
  );
}
