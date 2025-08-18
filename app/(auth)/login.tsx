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
import { useCurrentApp } from "@/context/app.context";
import { loginAPI } from "@/utils/api";
import { APP_COLORS } from "@/utils/constant";
import { LoginSchema } from "@/utils/validate.schema";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { Text } from "react-native";

const LoginPage = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const { setAppState } = useCurrentApp();

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      const res = await loginAPI(email, password);
      setLoading(false);

      if (res && res.data) {
        router.push("/(tabs)");
        setAppState(res.data);
        await AsyncStorage.setItem("access_token", res.data.access_token);
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
    <>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => handleLogin(values.email, values.password)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <Box className="flex-1 justify-center px-[26px] bg-white">
            <Heading className="mb-[31px] text-[37px]">Login</Heading>
            <FormField
              value={values.email}
              label="Email"
              placeholder="Enter your full name"
              labelClassName={`text-[${APP_COLORS.GREY}]`}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
            />

            <FormField
              value={values.password}
              label="Password"
              placeholder="Enter your password"
              labelClassName={`text-[${APP_COLORS.GREY}]`}
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
            />

            <VStack className="items-center gap-[33px] mb-[54px]">
              <ShareButton
                loading={loading}
                title="Login"
                onPress={() => handleSubmit()}
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
        )}
      </Formik>
    </>
  );
};

export default LoginPage;
