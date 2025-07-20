import { Redirect } from "expo-router";

const WelcomePage = () => {
  if (true) {
    return <Redirect href={"/(auth)/verify"} />;
  }
  // return(
  // <ImageBackground style={{ flex: 1 }} source={backgroundImage}>
  //   <LinearGradient
  //     colors={["transparent", "#191B2F"]}
  //     locations={[0.2, 0.8]}
  //     style={{ flex: 1 }}
  //   >
  //     <View className="flex-1 px-[28px]">
  //       <View className="flex-[0.6] justify-center">
  //         <Text className="text-[45px] font-bold">Welcome to</Text>
  //         <Text
  //           className="text-[45px] font-bold"
  //           style={{ color: APP_COLORS.ORANGE }}
  //         >
  //           FoodHub
  //         </Text>
  //         <Text className="text-[18px] text-[#30384F]">
  //           Your favourite foods delivered fast at your door.
  //         </Text>
  //       </View>
  //       <View className="flex-[0.4] justify-center">
  //         <View className="gap-4">
  //           <TextBetweenTwoLine text="Sign in with" textStyle="text-white" />

  //           <View className="flex-row justify-center gap-8">
  //             <ShareButton
  //               title="FaceBook"
  //               onPress={() => {
  //                 console.log("FaceBook");
  //               }}
  //               textStyle="uppercase text-center flex-1"
  //               pressStyle="flex-1"
  //               buttonStyle="bg-white justify-center items-center"
  //               icon={<Image source={fbLogo} className="w-6 h-6" />}
  //             />

  //             <ShareButton
  //               title="Google"
  //               onPress={() => {
  //                 console.log("google");
  //               }}
  //               textStyle="uppercase text-center flex-1"
  //               pressStyle="flex-1"
  //               buttonStyle="bg-white justify-center items-center"
  //               icon={<Image source={googleLogo} className="w-6 h-6" />}
  //             />
  //           </View>

  //           <View>
  //             <ShareButton
  //               title="Start with email"
  //               icon=""
  //               onPress={() => {
  //                 console.log("start with email");
  //               }}
  //               textStyle="uppercase text-white"
  //               pressStyle=""
  //               buttonStyle="justify-center items-center bg-[#505050] border border-[3px] border-[#2c2c2c]"
  //             />
  //           </View>
  //           <View className="flex-row justify-center">
  //             <Text className="text-white">Already have an account? </Text>
  //             <Link href={"/(auth)/signup"}>
  //               <Text className="text-white underline">Sign In</Text>
  //             </Link>
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   </LinearGradient>
  // </ImageBackground>
  // )
};

export default WelcomePage;
