import Logo from "@/assets/svg/Logo";
import { AboutIcon } from "@/components/Icons";
import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo width={200} height={80} />,
          headerRight: () => (
            <Link href="/about" asChild>
              <Pressable className="active:opacity-50" hitSlop={20}>
                <AboutIcon size={35} />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
