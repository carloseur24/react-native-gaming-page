import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { getLatestGames, GameType } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import Logo from "../assets/svg/Logo";
import { AboutIcon } from "./Icons";
import { Screen } from "./Screen";

export default function Main() {
  const [games, setGames] = useState<GameType[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games: GameType[]) => setGames(games));
  }, []);

  return (
    <Screen
      className="bg-black"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 12,
      }}
    >
      {games.length === 0 ? (
        <View className="flex w-full h-full items-center justify-center">
          <ActivityIndicator color="#fff" size="large" />
        </View>
      ) : (
        <FlatList
          data={games}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </Screen>
  );
}
