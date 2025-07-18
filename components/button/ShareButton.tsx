import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";

interface IProps {
  title: string;
  onPress: () => void;
  icon?: ReactNode;
  textStyle?: string;
  buttonStyle?: string;
  pressStyle?: string;
}

const ShareButton = (props: IProps) => {
  const {
    title,
    onPress,
    icon = "",
    textStyle = "",
    buttonStyle = "",
    pressStyle = "",
  } = props;

  return (
    <Pressable
      onPress={onPress}
      className={`${pressStyle}`}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
    >
      {({ pressed }) => (
        <View
          className={`flex-row items-center rounded-full px-[15px] py-[10px] gap-2 ${buttonStyle} ${
            pressed ? "opacity-50" : "opacity-100"
          }`}
        >
          {icon}
          <Text className={textStyle}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default ShareButton;
