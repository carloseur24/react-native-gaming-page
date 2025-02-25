import { GameType } from "@/lib/metacritic";
import { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";

function GameCard({ game }: { game: GameType }) {
  return (
    <View key={game.id} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.title}>{game.name}</Text>
            <Text style={styles.score}>{game.topCriticScore?.toFixed(2)}</Text>
            <Text style={styles.description}>{game.description}</Text>
          </View>
  )
}

function AnimatedGameCard({game,index}){

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
  Animated.timing(opacity,{
    toValue: 1,
    duration: 500,
    delay: index * 100,
    useNativeDriver: true,
  }).start();
  },[opacity,index]);

  return(
    <Animated.View style={{opacity}}>
      <GameCard game={game} />
    </Animated.View>
  )
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

export { GameCard, AnimatedGameCard };