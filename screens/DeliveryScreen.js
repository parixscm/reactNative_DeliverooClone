import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/solid";
import MapView, { Marker } from "react-native-maps";
``;
import * as Progress from "react-native-progress";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="p-5 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-lg text-white font-light">Order Help</Text>
        </View>
        <View className="mx-5 my-2 p-6 rounded-md bg-white z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="mt-10 flex-1 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="h-28 flex-row items-center space-x-5 bg-white">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="p-4 ml-5 w-12 h-12 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="text-lg">Jason Kim</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="mr-5 text-[#00CCBB] text-lg font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
