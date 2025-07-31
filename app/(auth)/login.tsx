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
import { loginAPI } from "@/utils/api";
import { APP_COLORS } from "@/utils/constant";
import { router } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const res = await loginAPI(email, password);

      if (res && res.data) {
        // router.push("/(app)/home");
      } else {
        const errorMessage = Array.isArray(res.message)
          ? res.message[0]
          : res.message;

        toast.show({
          render: ({ id }) => (
            <Toast nativeID={id} action="error" variant="solid">
              <ToastTitle>Login Failed</ToastTitle>
              <ToastDescription>{errorMessage}</ToastDescription>
            </Toast>
          ),
        });

        if (res.statusCode === 400) {
          router.replace({
            pathname: "/(auth)/verify",
            params: { email: email, isLogin: 1 },
          });
        }
      }
    } catch (error) {
      toast.show({
        render: ({ id }) => (
          <Toast nativeID={id} action="error" variant="solid">
            <ToastTitle>Error</ToastTitle>
            <ToastDescription>
              {error instanceof Error ? error.message : "Something went wrong"}
            </ToastDescription>
          </Toast>
        ),
      });
    }
  };

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
          onPress={handleLogin}
          buttonStyle="bg-[#FE724C] px-[80px] py-[18px]"
          textStyle="text-white"
        />
        <HStack>
          <Text>Don’t have an account? </Text>
          <Text
            className="text-[#FE724C]"
            onPress={() => router.push("/(auth)/signup")}
          >
            Sign Up
          </Text>
        </HStack>
      </VStack>

      <SocialSignUp />
    </Box>
  );
};

export default LoginPage;
