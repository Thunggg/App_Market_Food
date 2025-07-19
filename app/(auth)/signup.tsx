import FormField from "@/components/auth/FormField";
import SocialSignUp from "@/components/auth/SocialSignUp";
import ShareButton from "@/components/button/ShareButton";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { APP_COLORS } from "@/utils/constant";
import { Text } from "react-native";

const SignUpPage = () => {
  return (
    <>
      <Box className="flex-1 justify-center px-[26px] bg-white">
        <Heading className="mb-[31px] text-[37px]">Sign Up</Heading>
        <FormField
          label="Full Name"
          placeholder="Enter your full name"
          labelClassName={`text-[${APP_COLORS.GRAY}]`}
        />

        <FormField
          label="Email"
          placeholder="Enter your email"
          labelClassName={`text-[${APP_COLORS.GRAY}]`}
          keyboardType="email-address"
        />

        <FormField
          label="Password"
          placeholder="Enter your password"
          labelClassName={`text-[${APP_COLORS.GRAY}]`}
          secureTextEntry={true}
        />

        <VStack className="items-center gap-[33px] mb-[54px]">
          <ShareButton
            title="Sign Up"
            onPress={() => {}}
            buttonStyle="bg-[#FE724C] px-[80px] py-[18px]"
            textStyle="text-white"
          />
          <HStack>
            <Text>Already have an account? </Text>
            <Text className="text-[#FE724C]">Login</Text>
          </HStack>
        </VStack>

        <SocialSignUp />
      </Box>
    </>
  );
};

export default SignUpPage;
