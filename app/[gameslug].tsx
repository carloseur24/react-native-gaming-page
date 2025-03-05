import { Screen } from "@/components/Screen";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View, ActivityIndicator } from "react-native";
import { getLatestGames } from "../lib/metacritic";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);
  useEffect(() => {
    if (gameslug) {
      getLatestGames().then((gameInfo) => {
        setGameInfo(gameInfo);
      });
    }
  }, [gameslug]);
  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => {},
          headerRight: () => (
            <Text className="text-white text-xl font-bold text-center">
              {gameslug}
            </Text>
          ),
        }}
      />

      <View className="flex-col justify-between items-center gap-5">
        {gameInfo === null ? (
          <View className="flex w-full h-full items-center justify-center">
            <ActivityIndicator color="#fff" size="large" />
          </View>
        ) : (
          <>
            <Image
              source={{ uri: gameInfo[0].image }}
              className="w-36 h-48 rounded-lg bg-cover"
            />
            <Text className="text-white text-2xl font-bold px-8 text-center">
              {gameslug}
            </Text>
            <Text className="text-slate-300 text-xl px-4 flex-shrink text-left">
              {gameInfo[0].description}
            </Text>
          </>
        )}
      </View>
    </Screen>
  );
}
