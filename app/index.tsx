import { Text, View } from "react-native";

const WelcomePage = () => {
  return (
    <View className="flex-1 border-red-500 border-2">
      <View className="flex-[0.6] border-red-500 border-2 items-center justify-center">
        <Text className="text-[45px] font-bold">Welcome to</Text>
        <Text className="text-[#FE724C] text-[45px] font-bold">FoodHub</Text>
        <Text className="text-[18px] text-[#30384F]">
          Your favourite foods delivered fast at your door.
        </Text>
      </View>

      <View className="flex-[0.4] border-red-500 border-2">
        <Text className="text-white">Đăng nhập với FaceBook</Text>
        <Text className="text-white">Đăng nhập với Google</Text>
        <Text className="text-white">Đăng nhập với email</Text>
        <Text className="text-white">Bạn đã có tài khoản? Đăng ký</Text>
      </View>
    </View>
  );
};

export default WelcomePage;
