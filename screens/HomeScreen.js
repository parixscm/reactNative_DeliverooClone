import { Image, SafeAreaView, Text, View } from "react-native";
import { UserIcon, ChevronDownIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row pb-3 mx-4 items-center space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-7 h-7 p-4 bg-gray-300 rounded-full"
        />

        <View className="flex-1">
          <Text className="text-xs text-red-400 font-bold">Deliver Now</Text>
          <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={30} color="#00CCBB" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
