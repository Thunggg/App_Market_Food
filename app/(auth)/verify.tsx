import LoadingOverlay from "@/components/loading/overlay";
import { Box } from "@/components/ui/box";
import {
  Toast,
  ToastDescription,
  ToastTitle,
  useToast,
} from "@/components/ui/toast";
import { VStack } from "@/components/ui/vstack";
import { verifyCodeAPI } from "@/utils/api";
import { APP_COLORS } from "@/utils/constant";
import { useState } from "react";
import { Keyboard, Text } from "react-native";
import OTPTextView from "react-native-otp-textinput";

const VerifyPage = () => {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const toast = useToast();

  const handleCellTextChange = async (text: string, i: number) => {
    if (i === 5 && text) {
      setIsSubmit(true);
      Keyboard.dismiss();
      const res = await verifyCodeAPI("admin1@gmail.com", "123456");
      setIsSubmit(false);

      if (res.data) {
        //success
        alert("success");
      } else {
        toast.show({
          render: ({ id }) => (
            <Toast nativeID={id} action="error" variant="solid">
              <ToastTitle>Sign Up Failed</ToastTitle>
              <ToastDescription>Mã code không hợp lệ</ToastDescription>
            </Toast>
          ),
        });
      }
    }
  };

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
            handleCellTextChange={handleCellTextChange}
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
          <Text>Không nhận được mã xác nhận, </Text>
          <Text className="underline text-[15px] text-primary">gửi lại</Text>
        </Box>
      </Box>

      {isSubmit && <LoadingOverlay />}
    </>
  );
};

export default VerifyPage;
