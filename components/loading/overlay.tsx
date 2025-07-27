import { ActivityIndicator, View } from "react-native";

interface IProps {}

const LoadingOverlay = (props: IProps) => {
  return (
    <View className="absolute inset-0 items-center justify-center bg-black/50">
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingOverlay;
