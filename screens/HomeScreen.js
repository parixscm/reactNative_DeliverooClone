import { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

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
      <View className="pb-3 mx-4 flex-row items-center space-x-2">
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
      <View className="pb-2 mx-4 flex-row items-center space-x-2">
        <View className="p-3 flex-row flex-1 space-x-2 bg-gray-200">
          <MagnifyingGlassIcon size={20} kcolor="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements from our partners"
        />
        {/* Tasty Discounts */}
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
        />
        {/* Offers near you */}
        <FeaturedRow
          id="3"
          title="Offers Near You"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
