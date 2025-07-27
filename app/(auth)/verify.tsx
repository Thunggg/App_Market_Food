import LoadingOverlay from "@/components/loading/overlay";
import { Box } from "@/components/ui/box";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";
import { resendCodeAPI, verifyCodeAPI } from "@/utils/api";
import { APP_COLORS } from "@/utils/constant";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Keyboard, Text } from "react-native";
import OTPTextView from "react-native-otp-textinput";

const VerifyPage = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const toast = useToast();
  const otpRef = useRef<OTPTextView>(null);
  const [code, setCode] = useState<string>("");

  const { email } = useLocalSearchParams();

  const verifyCode = async () => {
    //call api
    Keyboard.dismiss();
    setIsSubmit(true);
    const res = await verifyCodeAPI(email as string, code);
    setIsSubmit(false);

    //clear input

    if (res.data) {
      //success
      otpRef?.current?.clear();
      toast.show({
        render: ({ id }) => (
          <Toast nativeID={id} action="success" variant="solid">
            <ToastTitle>Kích hoạt tài khoản thành công!</ToastTitle>
            <ToastDescription>
              Bạn đã kích hoạt tài khoản thành công rồi
            </ToastDescription>
          </Toast>
        ),
      });
      // router.replace("/(auth)/login");
    } else {
      toast.show({
        render: ({ id }) => (
          <Toast nativeID={id} action="error" variant="solid">
            <ToastTitle>Kích hoạt tài khoản thất bại!</ToastTitle>
            <ToastDescription>Mã code không hợp lệ</ToastDescription>
          </Toast>
        ),
      });
    }
  };

  const handleResendOTP = async () => {
    //call api
    otpRef?.current?.clear();

    const res = await resendCodeAPI(email as string);
    if (res.data) {
      toast.show({
        render: ({ id }) => (
          <Toast nativeID={id} action="success" variant="solid">
            <ToastTitle>Gửi lại mã xác nhận thành công!</ToastTitle>
            <ToastDescription>
              Mã xác nhận đã được gửi tới địa chỉ email của bạn
            </ToastDescription>
          </Toast>
        ),
      });
    } else {
      toast.show({
        render: ({ id }) => (
          <Toast nativeID={id} action="error" variant="solid">
            <ToastTitle>Gửi lại mã xác nhận thất bại!</ToastTitle>
          </Toast>
        ),
      });
    }
  };

  useEffect(() => {
    if (code && code.length === 6) {
      verifyCode();
    }
  }, [code]);

  return (
    <>
      <Box className="px-5 py-7 bg-white flex-1">
        <Text className="text-[25px] font-semibold my-5">
          Xác thực tài khoản
        </Text>
        <Text className="my-2">
          Vui lòng nhập mã xác nhận đã được gửi tới địa chỉ hoidanit@gmail.com
        </Text>

        <VStack className="my-5 justify-center items-center">
          <OTPTextView
            ref={otpRef}
            handleTextChange={setCode}
            autoFocus
            inputCount={6}
            inputCellLength={1}
            tintColor={APP_COLORS.ORANGE}
            textInputStyle={{
              borderWidth: 1,
              borderColor: APP_COLORS.GREY,
              borderBottomWidth: 1,
              borderRadius: 5,
              // @ts-ignore:next-line
              color: APP_COLORS.ORANGE, // native style cần cho input
            }}
          />
        </VStack>

        <Box className="flex-row my-2">
          <Text onPress={() => handleResendOTP()}>
            Không nhận được mã xác nhận,{" "}
          </Text>
          <Text className="underline text-[15px] text-primary">gửi lại</Text>
        </Box>
      </Box>

      {isSubmit && <LoadingOverlay />}
    </>
  );
};

export default VerifyPage;
