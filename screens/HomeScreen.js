import { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="px-4 pb-3 flex-row items-center space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-7 h-7 p-4 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-xs text-gray-400 font-bold">Deliver Now</Text>
          <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="px-4 pb-2 flex-row items-center space-x-2">
        <View className="p-3 flex-row flex-1 space-x-2 bg-gray-200">
          <MagnifyingGlassIcon size={20} kcolor="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
