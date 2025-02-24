import { useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestGames, GameType } from "../../lib/metacritic";
import GameCard from "./GameCard";
// import Logo from "./Logo";

export default function Main() {
  const [games, setGames] = useState<GameType[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games: GameType[]) => setGames(games));
  }, []);

  return (e
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, paddingHorizontal: 12 }}>
      {/* <Logo /> */}
      {games.length === 0 ? (
        <View style={{ display: "flex", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="#fff" size="large" />
        </View>
        ) : (
          <FlatList
            data={games}
            renderItem={({ item }) => <GameCard game={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        )
      }
    </View>
  );
}

