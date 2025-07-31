import FormField from "@/components/auth/FormField";
import SocialSignUp from "@/components/auth/SocialSignUp";
import ShareButton from "@/components/button/ShareButton";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";
import { registerAPI } from "@/utils/api";
import { APP_COLORS } from "@/utils/constant";
import { router } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSignUp = async () => {
    try {
      const res = await registerAPI(email, password, fullName);
      if (res.data) {
        router.replace({
          pathname: "/(auth)/verify",
          params: {
            email: email,
          },
        });
      } else {
        const errorMessage = Array.isArray(res.message)
          ? res.message[0]
          : res.message;
        toast.show({
          render: ({ id }) => (
            <Toast nativeID={id} action="error" variant="solid">
              <ToastTitle>Sign Up Failed</ToastTitle>
              <ToastDescription>{errorMessage}</ToastDescription>
            </Toast>
          ),
        });
      }
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
          labelClassName={`text-[${APP_COLORS.GREY}]`}
        />

        <FormField
          value={email}
          setValue={setEmail}
          label="Email"
          placeholder="Enter your email"
          labelClassName={`text-[${APP_COLORS.GREY}]`}
          keyboardType="email-address"
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
            title="Sign Up"
            onPress={() => handleSignUp()}
            buttonStyle="bg-[#FE724C] px-[80px] py-[18px]"
            textStyle="text-white"
          />
          <HStack>
            <Text>Already have an account? </Text>
            <Text
              className="text-[#FE724C]"
              onPress={() => router.push("/(auth)/login")}
            >
              Login
            </Text>
          </HStack>
        </VStack>

        <SocialSignUp />
      </Box>
    </>
  );
};

export default SignUpPage;
