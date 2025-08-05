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
import { SignUpSchema } from "@/utils/validate.schema";
import { router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { Text } from "react-native";

const SignUpPage = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (
    email: string,
    password: string,
    fullName: string
  ) => {
    try {
      setLoading(true);
      const res = await registerAPI(email, password, fullName);
      setLoading(false);

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
      <Formik
        validationSchema={SignUpSchema}
        initialValues={{ email: "", password: "", name: "" }}
        onSubmit={(values) =>
          handleSignUp(values.email, values.password, values.name)
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Box className="flex-1 justify-center px-[26px] bg-white">
            <Heading className="mb-[31px] text-[37px]">Sign Up</Heading>
            <FormField
              value={values.name}
              label="Full Name"
              placeholder="Enter your full name"
              labelClassName={`text-[${APP_COLORS.GREY}]`}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
            />

            <FormField
              value={values.email}
              label="Email"
              placeholder="Enter your email"
              labelClassName={`text-[${APP_COLORS.GREY}]`}
              keyboardType="email-address"
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
                title="Sign Up"
                onPress={handleSubmit}
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
        )}
      </Formik>
    </>
  );
};

export default SignUpPage;
