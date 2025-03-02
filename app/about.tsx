import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { ReturnIcon } from "@/components/Icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function About() {
  return (
    <SafeAreaProvider>
      <Link asChild href="/" className="m-3 mb-0">
        <Pressable className="active:opacity-50 flex-row items-center gap-2">
          <ReturnIcon />
          <Text className="text-white/90 text-lg mb-4">Pa' tu casa</Text>
        </Pressable>
      </Link>
      <ScrollView className="ml-3 mt-10">
        <Text className="text-white text-2xl font-bold">Sobre nosotros</Text>
        <Text className="text-white/90 text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo?
          Sequi laborum ipsum maiores sint sit dignissimos possimus asperiores
          sapiente? Omnis soluta hic voluptatem porro necessitatibus repudiandae
          laborum in voluptatum?
        </Text>
        <Text className="text-white/90 text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo?
          Sequi laborum ipsum maiores sint sit dignissimos possimus asperiores
          sapiente? Omnis soluta hic voluptatem porro necessitatibus repudiandae
          laborum in voluptatum?
        </Text>
        <Text className="text-white/90 text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo?
          Sequi laborum ipsum maiores sint sit dignissimos possimus asperiores
          sapiente? Omnis soluta hic voluptatem porro necessitatibus repudiandae
          laborum in voluptatum?
        </Text>
        <Text className="text-white/90 text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo?
          Sequi laborum ipsum maiores sint sit dignissimos possimus asperiores
          sapiente? Omnis soluta hic voluptatem porro necessitatibus repudiandae
          laborum in voluptatum?
        </Text>
        <Text className="text-white/90 text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo?
          Sequi laborum ipsum maiores sint sit dignissimos possimus asperiores
          sapiente? Omnis soluta hic voluptatem porro necessitatibus repudiandae
          laborum in voluptatum?
        </Text>
        <Text className="text-white/90 text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo?
          Sequi laborum ipsum maiores sint sit dignissimos possimus asperiores
          sapiente? Omnis soluta hic voluptatem porro necessitatibus repudiandae
          laborum in voluptatum?
        </Text>
        <Text className="text-white/90 text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo?
          Sequi laborum ipsum maiores sint sit dignissimos possimus asperiores
          sapiente? Omnis soluta hic voluptatem porro necessitatibus repudiandae
          laborum in voluptatum?
        </Text>
      </ScrollView>
    </SafeAreaProvider>
  );
}
