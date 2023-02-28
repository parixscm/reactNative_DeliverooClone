import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";
import Currency from "react-currency-formatter";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(state => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItem = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`p-4 bg-white border border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="pr-2 flex-1">
            <Text className="mb-1 text-lg">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text>
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>

          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(image).url() }}
              className="w-20 h-20 bg-gray-300"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="px-4 bg-white">
          <View className="pb-3 flex-row items-center space-x-2">
            <TouchableOpacity disabled={!items.length} onPress={removeItem}>
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItem}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
