import { useEffect, useState } from "react";
import {}
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLatestGames, GameType } from "../lib/metacritic";

export default function Main() {
  const [games, setGames] = useState<GameType[]>([]);
  const insets = useSafeAreaInsets();

  
  useEffect(() => {
    getLatestGames().then((games: GameType[]) => setGames(games));
  }, []);


  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, paddingHorizontal: 12 }}>
      <ScrollView>
        {games.map((game, index) => (
          <View key={game.id || index} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.title}>{game.name}</Text>
            <Text style={styles.score}>{game.topCriticScore?.toFixed(2)}</Text>
            <Text style={styles.description}>{game.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "baseline",
    justifyContent: "center",
    backgroundColor: "#000",
    marginBottom: 20, // Add some spacing between cards
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "cover", // Use resizeMode instead
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    color: "#eee",
    fontSize: 20,
  },
  description: {
    marginTop: 10,
    fontWeight: "500",
    color: "#eee",
    fontSize: 18,
  },
  score: {
    marginTop: 10,
    backgroundColor: "#0e06",
    fontWeight: "bold",
    color: "#eee",
    fontSize: 18,
    paddingVertical: 5, // Use paddingVertical and paddingHorizontal
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});
