import { APP_COLORS } from "@/utils/constant";
import { ReactNode } from "react";
import { Pressable, Text } from "react-native";
import { Box } from "../ui/box";
import { HStack } from "../ui/hstack";
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
          <HStack
            className={`flex-row items-center rounded-full px-[15px] py-[10px] ${buttonStyle}`}
            style={{
              opacity: pressed === true || loading ? 0.5 : 1,
            }}
            space="md"
          >
            {loading ? (
              <>
                <HStack space="md">
                  <Box className="w-3 h-3 justify-center items-center">
                    <Spinner size="small" color={APP_COLORS.GREY} />
                  </Box>
                  <Text className={textStyle}>{title}</Text>
                  {icon && typeof icon === "object" ? icon : null}
                </HStack>
              </>
            ) : (
              <>
                {icon && typeof icon === "object" ? icon : null}
                <Text className={textStyle}>{title}</Text>
              </>
            )}
          </HStack>
        )}
      </Pressable>
    </>
  );
};

export default ShareButton;
