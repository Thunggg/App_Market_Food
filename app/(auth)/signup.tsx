import fbLogo from "@/assets/images/auth/facebook.png";
import googleLogo from "@/assets/images/auth/google.png";
import ShareButton from "@/components/button/ShareButton";
import TextBetweenTwoLine from "@/components/button/TextBetweenTwoLine";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Image, Text } from "react-native";

const SignUpPage = () => {
  return (
    <>
      <Box className="flex-1 justify-center px-[26px] bg-white">
        <Heading className="mb-[31px]">Sign Up</Heading>

        {/* full name */}
        <VStack className="gap-[9px] mb-[29px]">
          <Text>Full Name</Text>
          <Input size="xl" variant="outline">
            <InputField placeholder="Enter your full name" />
          </Input>
        </VStack>

        {/* email address */}
        <VStack className="gap-[9px] mb-[29px]">
          <Text>Email</Text>
          <Input size="xl" variant="outline">
            <InputField placeholder="Enter your email" />
          </Input>
        </VStack>

        {/* password */}
        <VStack className="gap-[9px] mb-[33px]">
          <Text>Password</Text>
          <Input size="xl" variant="outline">
            <InputField placeholder="Enter your password" />
          </Input>
        </VStack>

        {/* sign up button */}
        <VStack className="items-center gap-[33px] mb-[54px]">
          <ShareButton
            title="Sign Up"
            onPress={() => {}}
            buttonStyle="bg-[#FE724C] px-[75px]"
            textStyle="text-white"
          />
          <HStack>
            <Text>Already have an account? </Text>
            <Text className="text-[#FE724C]">Login</Text>
          </HStack>
        </VStack>

        <VStack>
          <TextBetweenTwoLine textStyle="text-black" />
          <HStack className="items-center justify-between mt-[10px]">
            <ShareButton
              title="Google"
              onPress={() => {}}
              icon={<Image source={googleLogo} className="w-6 h-6" />}
              pressStyle="flex-1"
              textStyle="text-red-500"
            />
            <ShareButton
              title="Facebook"
              onPress={() => {}}
              icon={<Image source={fbLogo} className="w-6 h-6" />}
              pressStyle="flex-1"
              textStyle="text-red-500"
            />
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default SignUpPage;
