import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Box } from "@/components/ui/box";
import { Input, InputField } from "@/components/ui/input";
import { useCurrentApp } from "@/context/app.context";
import { Platform, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 50,
  },
});
const AccountPage = () => {
  const { theme, appState } = useCurrentApp();

  const backend =
    Platform.OS === "android"
      ? process.env.EXPO_PUBLIC_ANDROID_API_URL
      : process.env.EXPO_PUBLIC_IOS_API_URL;

  const baseImage = `${backend}/images/avatar`;
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", gap: 5 }}>
        <Avatar className="bg-indigo-600" size="2xl">
          <AvatarFallbackText className="text-white">
            {appState?.user.name}
          </AvatarFallbackText>
        </Avatar>
        <Text>{appState?.user.name}</Text>
      </View>
      <View style={{ marginTop: 20, gap: 20 }}>
        <Box>
          <Text>Họ và tên</Text>
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField
              value={appState?.user.name}
              placeholder="Enter Text here..."
            />
          </Input>
        </Box>

        <Box>
          <Text>Email</Text>
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField
              value={appState?.user.email}
              placeholder="Enter Text here..."
            />
          </Input>
        </Box>

        <Box>
          <Text>Số điện thoại</Text>
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField
              value={appState?.user.phone}
              placeholder="Enter Text here..."
            />
          </Input>
        </Box>
      </View>
    </View>
  );
};

export default AccountPage;
