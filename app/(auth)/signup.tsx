import FormField from "@/components/auth/FormField";
import SocialSignUp from "@/components/auth/SocialSignUp";
import ShareButton from "@/components/button/ShareButton";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { APP_COLORS } from "@/utils/constant";
import axios from "axios";
import { useState } from "react";
import { Text } from "react-native";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const url = `${process.env.EXPO_PUBLIC_API_URL}/api/v1/auth/register`;

    try {
      const res = await axios.post(url, { fullName, email, password });
    } catch (error) {}
  };

  return (
    <>
      <Box className="flex-1 justify-center px-[26px] bg-white">
        <Heading className="mb-[31px] text-[37px]">Sign Up</Heading>
        <FormField
          value={fullName}
          setValue={setFullName}
          label="Full Name"
          placeholder="Enter your full name"
          labelClassName={`text-[${APP_COLORS.GRAY}]`}
        />

        <FormField
          value={email}
          setValue={setEmail}
          label="Email"
          placeholder="Enter your email"
          labelClassName={`text-[${APP_COLORS.GRAY}]`}
          keyboardType="email-address"
        />

        <FormField
          value={password}
          setValue={setPassword}
          label="Password"
          placeholder="Enter your password"
          labelClassName={`text-[${APP_COLORS.GRAY}]`}
          secureTextEntry={true}
        />

        <VStack className="items-center gap-[33px] mb-[54px]">
          <ShareButton
            title="Sign Up"
            onPress={() => {
              console.log(fullName, email, password);
            }}
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
