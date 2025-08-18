import { Text, View } from "react-native";
import { Divider } from "../ui/divider";

const TextBetweenTwoLine = ({
  textStyle,
  text,
}: {
  textStyle?: string;
  text?: string;
}) => {
  return (
    <>
      <View className="flex-row items-center gap-2">
        <Divider className="flex-1" />
        <Text className={`text-sm ${textStyle}`}>{text}</Text>
        <Divider className="flex-1" />
      </View>
    </>
  );
};

export default TextBetweenTwoLine;
