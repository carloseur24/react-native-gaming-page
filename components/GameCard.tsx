import { GameType } from "@/lib/metacritic";
import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";
import Score from "./Score";

function GameCard({ game }: { game: GameType }) {
  return (
    <View
      className="rounded-lg bg-gray-500/10 mb-5 flex-row gap-4 box-border p-4"
      key={game.id}
    >
      <Image
        source={{ uri: game.image }}
        className="w-36 h-48 rounded-lg bg-cover"
      />
      <View>
        <View className="flex-row justify-start gap-2 items-center">
          <Score score={Math.ceil(game.topCriticScore ?? 0)} maxScore={100} />
          <Text className="text-white text-xl font-bold">{game.name}</Text>
        </View>

        <Text style={styles.description}>
          {game.description.slice(0, 100)}...
        </Text>
      </View>
    </View>
  );
}

function AnimatedGameCard({ game, index }: { game: GameType; index: number }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "baseline",
    justifyContent: "center",
    backgroundColor: "#000",
    marginBottom: 20, // Add some spacing between cards
  },
  description: {
    marginTop: 10,
    fontWeight: "500",
    color: "#eee",
    fontSize: 18,
  },
});

export { GameCard, AnimatedGameCard };
