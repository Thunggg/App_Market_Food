import ShareButton from "@/components/button/ShareButton";
import TextBetweenTwoLine from "@/components/button/TextBetweenTwoLine";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Input } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Text } from "react-native";

const SignUpPage = () => {
  return (
    <>
      <Box>
        <Heading>Sign Up</Heading>

        {/* full name */}
        <VStack>
          <Text>Full Name</Text>
          <Input />
        </VStack>

        {/* email address */}
        <VStack>
          <Text>Email</Text>
          <Input />
        </VStack>

        {/* password */}
        <VStack>
          <Text>Password</Text>
          <Input />
        </VStack>

        {/* sign up button */}
        <VStack>
          <ShareButton title="Sign Up" onPress={() => {}} />
          <Text>Already have an account? </Text>
        </VStack>

        <HStack>
          <TextBetweenTwoLine />
          <ShareButton title="Sign Up with Google" onPress={() => {}} />
          <ShareButton title="Sign Up with Facebook" onPress={() => {}} />
        </HStack>
      </Box>
    </>
  );
};

export default SignUpPage;
