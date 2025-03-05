import { Screen } from "@/components/Screen";
import { Stack } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function About() {
  const repeat = ["", "", "", "", "", "", "", "", "", "", ""];
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <ScrollView className="flex-shrink ml-3">
        <Text className="text-white text-2xl font-bold">Sobre nosotros</Text>

        {repeat.map((item, index) => (
          <Text key={index} className="text-white/90 text-lg mb-4 flex-shrink">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo?
            Sequi laborum ipsum maiores sint sit dignissimos possimus asperiores
            sapiente? Omnis soluta hic voluptatem porro necessitatibus repudian
            dae laborum in voluptatum?
          </Text>
        ))}
      </ScrollView>
    </Screen>
  );
}
