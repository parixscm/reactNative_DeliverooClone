import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
import {
  selectBasketItems,
  selectBasketTotalPrice,
} from "../features/basketSlice";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const basketTotalPrice = useSelector(selectBasketTotalPrice);
  const navigation = useNavigation();

  return (
    <View className="w-full absolute z-50 bottom-10">
      <TouchableOpacity className="mx-5 p-4 flex-row items-center space-x-1 bg-[#00CCBB] rounded-lg">
        <Text className="px-2 py-1 text-white text-lg font-extrabold bg-[#01A296]">
          {items.length}
        </Text>
        <Text className="flex-1 text-white text-lg text-center font-extrabold">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotalPrice} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default BasketIcon;
