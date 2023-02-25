import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  k,
} from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="p-4 w-full h-56 bg-gray-300"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="p-2 absolute top-14 left-5 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="my-1 flex-row space-x-2">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} color="green" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-600">{rating}</Text> ‧ {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon size={22} color="gray" opacity={0.4} />
              <Text className="text-xs text-gray-500">Nearby ‧ {address}</Text>
            </View>
          </View>
          <Text className="mt-2 pb-4 text-gray-500">{short_description}</Text>
        </View>
        <TouchableOpacity className="p-4 flex-row items-center space-x-2 border-y border-gray-300">
          <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food alergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
