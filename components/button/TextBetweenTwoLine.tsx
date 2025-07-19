import { Text, View } from "react-native";
import { Divider } from "../ui/divider";

const TextBetweenTwoLine = () => {
  return (
    <>
      <View className="flex-row items-center gap-2">
        <Divider className="flex-1" />
        <Text className="text-white text-sm">Sign in with</Text>
        <Divider className="flex-1" />
      </View>
    </>
  );
};

export default TextBetweenTwoLine;
