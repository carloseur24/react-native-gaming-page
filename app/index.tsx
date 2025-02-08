import { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { getLatestGames, GameType } from "../lib/metacritic";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [games, setGames] = useState<GameType[]>([]);

  useEffect(() => {
    getLatestGames().then((games: GameType[]) => setGames(games));
  }, []);
  console.log(games);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>App React Native 2</Text>
        <ScrollView style={styles.scrollViewContent}>
          {games.map((game, index) => (
            <View key={game.id || index} style={styles.card}>
              <Image source={{ uri: game.image }} style={styles.image} />
              <Text style={styles.title}>{game.name}</Text>
              <Text style={styles.score}>
                {game.topCriticScore?.toFixed(2)}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  safeArea: {
    flex: 1,
    margin: 12,
  },
  scrollViewContent: {},
  card: {
    alignItems: "baseline",
    justifyContent: "center",
    backgroundColor: "#000",
    marginBottom: 10, // Add some spacing between cards
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "contain", // Use resizeMode instead
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    color: "#eee",
    fontSize: 20,
  },
  score: {
    backgroundColor: "#0e06",
    fontWeight: "bold",
    color: "#eee",
    fontSize: 18,
    paddingVertical: 5, // Use paddingVertical and paddingHorizontal
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});
