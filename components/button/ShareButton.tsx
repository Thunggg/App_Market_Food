import { APP_COLORS } from "@/utils/constant";
import { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { Spinner } from "../ui/spinner";

interface IProps {
  title: string;
  onPress: () => void;
  icon?: ReactNode;
  textStyle?: string;
  buttonStyle?: string;
  pressStyle?: string;
  loading?: boolean;
}

const ShareButton = (props: IProps) => {
  const {
    title,
    onPress,
    icon = "",
    textStyle = "",
    buttonStyle = "",
    pressStyle = "",
    loading,
  } = props;

  return (
    <>
      <Pressable onPress={onPress} className={pressStyle} disabled={loading}>
        {({ pressed }) => (
          <View
            className={`flex-row items-center rounded-full px-[15px] py-[10px] gap-2 ${buttonStyle}`}
            style={{
              opacity: pressed ? 0.5 : 1 || loading ? 0.5 : 1,
            }}
          >
            <View className="w-4 h-4 justify-center items-center">
              {loading && <Spinner size="small" color={APP_COLORS.GREY} />}
            </View>
            {icon && typeof icon === "object" ? icon : null}
            <Text className={textStyle}>{title}</Text>
          </View>
        )}
      </Pressable>
    </>
  );
};

export default ShareButton;
