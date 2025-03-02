import { GameType } from "@/lib/metacritic";
import { useEffect, useRef } from "react";
import { View, Text, Image, Animated, Pressable } from "react-native";
import Score from "./Score";
import { Link } from "expo-router";

function GameCard({ game }: { game: GameType }) {
  return (
    <Link href={`/${game.name}`} asChild>
      <Pressable className="active:opacity-50 active:scale-95 border border-transparent active:border-white/20 transition-all duration-300 rounded-lg bg-gray-500/10 mb-5 p-4">
        <View className="flex-row gap-4 box-border" key={game.id}>
          <Image
            source={{ uri: game.image }}
            className="w-36 h-48 rounded-lg bg-cover"
          />
          <View className="flex-shrink">
            <View className="flex-row justify-start gap-2 items-center">
              <Score
                score={Math.ceil(game.topCriticScore ?? 0)}
                maxScore={100}
              />
              <Text className="text-white text-xl font-bold flex-shrink">
                {game.name}
              </Text>
            </View>

            <Text className="text-white/90 text-lg mb-4">
              {game.description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
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

export { GameCard, AnimatedGameCard };
