import { APP_COLORS } from "@/utils/constant";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";

const TabLayout = () => {
  const getIcons = (routeName: string, focused: boolean, size: number) => {
    if (routeName === "index") {
      return (
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={size}
          color={focused ? APP_COLORS.ORANGE : APP_COLORS.GREY}
        />
      );
    }
    if (routeName === "order") {
      return (
        <MaterialIcons
          name="list-alt"
          size={size}
          color={focused ? APP_COLORS.ORANGE : APP_COLORS.GREY}
        />
      );
    }

    if (routeName === "favorite") {
      return focused ? (
        <AntDesign name="heart" size={size} color={APP_COLORS.ORANGE} />
      ) : (
        <AntDesign name="hearto" size={size} color={APP_COLORS.GREY} />
      );
    }

    if (routeName === "notification") {
      return focused ? (
        <Octicons name="bell-fill" size={size} color={APP_COLORS.ORANGE} />
      ) : (
        <Octicons name="bell" size={size} color={APP_COLORS.GREY} />
      );
    }

    if (routeName === "account") {
      return focused ? (
        <MaterialCommunityIcons
          name="account"
          size={size}
          color={APP_COLORS.ORANGE}
        />
      ) : (
        <MaterialCommunityIcons
          name="account-outline"
          size={size}
          color={APP_COLORS.GREY}
        />
      );
    }

    return <></>;
  };
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return getIcons(route.name, focused, size);
        },
        headerShown: false,
        tabBarLabelStyle: { paddingBottom: 3 },
        tabBarActiveTintColor: APP_COLORS.ORANGE,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Đơn hàng",
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Đã thích",
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Thông báo",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Tôi",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
