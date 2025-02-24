import { View, Text, Image, StyleSheet } from "react-native";

function GameCard({ game }: { game: GameType }) {
  return (
    <View key={game.id || index} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <Text style={styles.title}>{game.name}</Text>
            <Text style={styles.score}>{game.topCriticScore?.toFixed(2)}</Text>
            <Text style={styles.description}>{game.description}</Text>
          </View>
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

export default GameCard;