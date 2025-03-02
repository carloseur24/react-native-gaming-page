import { ReturnIcon } from "@/components/Icons";
import { Link, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  return (
    <View>
      <View className="flex-col justify-between items-center gap-5">
        <Text className="text-white text-2xl font-bold px-8 text-center">
          Detalles de {gameslug}
        </Text>
        <Link href="/" asChild>
          <Pressable className="active:opacity-50 flex-row items-center gap-2 justify-center">
            <ReturnIcon />
            <Text className="text-white/90 text-lg mb-4">Volver</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
