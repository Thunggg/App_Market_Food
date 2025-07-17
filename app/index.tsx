import ShareButton from "@/components/button/ShareButton";
import { Divider } from "@/components/ui/divider";
import { APP_COLORS } from "@/utils/constant";
import { Text, View } from "react-native";

const WelcomePage = () => (
  <View className="flex-1 px-[28px]">
    <View className="flex-[0.6] justify-center">
      <Text className="text-[45px] font-bold">Welcome to</Text>
      <Text
        className="text-[45px] font-bold"
        style={{ color: APP_COLORS.ORANGE }}
      >
        FoodHub
      </Text>
      <Text className="text-[18px] text-[#30384F]">
        Your favourite foods delivered fast at your door.
      </Text>
    </View>

    <View className="flex-[0.4] justify-center">
      <View className="gap-4">
        <View className="flex-row items-center gap-2">
          <Divider className="flex-1" />
          <Text className="text-gray-500 text-sm">Sign in with</Text>
          <Divider className="flex-1" />
        </View>

        <View className="flex-row justify-center gap-2">
          <ShareButton
            title="FaceBook"
            onPress={() => {
              console.log("FaceBook");
            }}
            textStyle="uppercase text-center flex-1"
            pressStyle="flex-1"
            buttonStyle="bg-white justify-center items-center"
          />

          <ShareButton
            title="Google"
            onPress={() => {
              console.log("google");
            }}
            textStyle="uppercase text-center flex-1"
            pressStyle="flex-1"
            buttonStyle="bg-white justify-center items-center"
          />
        </View>

        <View>
          <ShareButton
            title="Start with email"
            onPress={() => {}}
            textStyle="uppercase"
            pressStyle=""
            buttonStyle="bg-white justify-center items-center"
          />
        </View>
        <View className="flex-row justify-center">
          <Text className="">Already have an account? Sign In</Text>
        </View>
      </View>
    </View>
  </View>
);

export default WelcomePage;
