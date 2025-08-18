import { getTopRestaurant } from "@/utils/api";
import { APP_COLORS } from "@/utils/constant";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

interface IProps {
  name: string;
  description: string;
  refAPI: string;
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  sale: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: APP_COLORS.ORANGE,
    padding: 3,
    borderRadius: 3,
    alignSelf: "flex-start",
  },
});
const CollectionHome = (props: IProps) => {
  const { name, description, refAPI } = props;
  const [restaurants, setRestaurants] = useState<ITopRestaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTopRestaurant(refAPI);
      if (res.data) {
        setRestaurants(res.data);
      } else {
        //error
      }
    };
    fetchData();
  }, [refAPI]);

  const baseImage = `${process.env.EXPO_PUBLIC_API_URL}/images/restaurant`;

  return (
    <>
      <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>
      <View style={styles.container}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Text
            style={{
              color: APP_COLORS.ORANGE,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            {name}
          </Text>
          <Text style={{ color: "#5a5a5a" }}>Xem tất cả</Text>
        </View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ color: "#5a5a5a" }}>{description}</Text>
        </View>
        <FlatList
          data={restaurants}
          horizontal
          contentContainerStyle={{ gap: 5 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ backgroundColor: "#efefef" }}>
                <Image
                  style={{ height: 130, width: 130 }}
                  source={{ uri: `${baseImage}/${item.image}` }}
                />
                <View style={{ padding: 5 }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{ fontWeight: "600", maxWidth: 130 }}
                  >
                    {item.name}
                  </Text>
                  <View>
                    <View style={styles.sale}>
                      <Text style={{ color: APP_COLORS.ORANGE }}>
                        Flash Sale
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default CollectionHome;
