import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { Link } from "expo-router";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { getLatestGames, GameType } from "../lib/metacritic";
import { AnimatedGameCard } from "./GameCard";
import Logo from "../assets/svg/Logo";
import { Text } from "react-native";

export default function Main() {
  const [games, setGames] = useState<GameType[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games: GameType[]) => setGames(games));
  }, []);

  return (
    <SafeAreaProvider>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingHorizontal: 12,
        }}
      >
        <Logo width={200} height={80} />

        <Link href="/about">
          <Text className="text-slate-400 text-lg font-bold">Ir al About</Text>
        </Link>

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
      </View>
    </SafeAreaProvider>
  );
}
