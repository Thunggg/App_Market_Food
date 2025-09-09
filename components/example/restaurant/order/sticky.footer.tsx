import { currencyFormatter } from "@/utils/api";
import { APP_COLORS } from "@/utils/constant";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, View } from "react-native";

const StickyFooter = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        zIndex: 11,
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
          borderTopWidth: 1,
          borderTopColor: APP_COLORS.GREY,
        }}
      >
        <View style={{ padding: 10 }}>
          <View
            style={{
              position: "absolute",
              left: 40,
              top: 5,
              width: 16,
              height: 16,
              borderRadius: 16 / 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: APP_COLORS.ORANGE,
            }}
          >
            <Text style={{ color: "white", fontSize: 9 }}>10</Text>
          </View>
          <Pressable onPress={() => alert("cart")}>
            <FontAwesome5
              name="shopping-basket"
              size={30}
              color={APP_COLORS.ORANGE}
            />
          </Pressable>
        </View>
        <View style={{ paddingRight: 10 }}>
          <Text
            style={{
              color: APP_COLORS.ORANGE,
              fontSize: 18,
            }}
          >
            {currencyFormatter(125000)}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: APP_COLORS.ORANGE,
        }}
      >
        <Text style={{ color: "white" }} onPress={() => alert("giao hang")}>
          Giao hàng
        </Text>
      </View>
    </View>
  );
};

export default StickyFooter;
