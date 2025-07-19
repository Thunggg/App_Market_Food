import fbLogo from "@/assets/images/auth/facebook.png";
import googleLogo from "@/assets/images/auth/google.png";
import ShareButton from "@/components/button/ShareButton";
import TextBetweenTwoLine from "@/components/button/TextBetweenTwoLine";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Image } from "react-native";

const SocialSignUp = () => {
  return (
    <VStack>
      <TextBetweenTwoLine text="Sign up with" textStyle="text-black" />
      <HStack className="items-center justify-between mt-[10px] gap-[20px]">
        <ShareButton
          title="Google"
          onPress={() => {}}
          icon={<Image source={googleLogo} className="w-6 h-6" />}
          pressStyle="flex-1"
          textStyle="text-red-500"
          buttonStyle="bg-[#D3D1D840] justify-center items-center"
        />
        <ShareButton
          title="Facebook"
          onPress={() => {}}
          icon={<Image source={fbLogo} className="w-6 h-6" />}
          pressStyle="flex-1"
          textStyle="text-red-500"
          buttonStyle="bg-[#D3D1D840] justify-center items-center"
        />
      </HStack>
    </VStack>
  );
};

export default SocialSignUp;
