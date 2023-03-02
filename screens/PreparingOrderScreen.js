import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

function PreparingOrderScreen() {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-96 h-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="my-10 text-lg text-white text-center font-bold"
      >
        waiting for restaurant to accept your order...
      </Animatable.Text>
      <Progress.Circle size={60} borderWidth={2} color="white" indeterminate />
    </SafeAreaView>
  );
}

export default PreparingOrderScreen;
