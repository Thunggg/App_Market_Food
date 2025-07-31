import FormField from "@/components/auth/FormField";
import SocialSignUp from "@/components/auth/SocialSignUp";
import ShareButton from "@/components/button/ShareButton";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { APP_COLORS } from "@/utils/constant";
import { useState } from "react";
import { Text } from "react-native";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box className="flex-1 justify-center px-[26px] bg-white">
      <Heading className="mb-[31px] text-[37px]">Login</Heading>
      <FormField
        value={email}
        setValue={setEmail}
        label="Email"
        placeholder="Enter your full name"
        labelClassName={`text-[${APP_COLORS.GREY}]`}
      />

      <FormField
        value={password}
        setValue={setPassword}
        label="Password"
        placeholder="Enter your password"
        labelClassName={`text-[${APP_COLORS.GREY}]`}
        secureTextEntry={true}
      />

      <VStack className="items-center gap-[33px] mb-[54px]">
        <ShareButton
          title="Login"
          onPress={() => {
            console.log(email, password);
          }}
          buttonStyle="bg-[#FE724C] px-[80px] py-[18px]"
          textStyle="text-white"
        />
        <HStack>
          <Text>Don’t have an account? </Text>
          <Text className="text-[#FE724C]">Sign Up</Text>
        </HStack>
      </VStack>

      <SocialSignUp />
    </Box>
  );
};

export default LoginPage;
