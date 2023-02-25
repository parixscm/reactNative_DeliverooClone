import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
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
        });
      }}
      className="bg-white mr-3 shadow-sm"
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="w-64 h-36 rounded-sm"
      />
      <View className="px-3 pt-2 pb-4">
        <Text className="text-lg font-bold">{title}</Text>
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
    </TouchableOpacity>
  );
};

export default RestaurantCard;
