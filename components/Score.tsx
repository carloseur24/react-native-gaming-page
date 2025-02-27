import { Text, View } from "react-native";

const Score = ({ score, maxScore }: { score: number; maxScore: number }) => {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 40) return "bg-red-500";
    if (percentage < 75) return "bg-orange-600";
    return "bg-green-500";
  };

  const className = getColors();

  return (
    <View className="flex-row gap-2 items-center">
      <Text
        className={`text-white text-lg font-bold px-2 py-1 mt-2 bg-green-500 rounded-full ${className}`}
      >
        {score}
      </Text>
    </View>
  );
};

export default Score;
