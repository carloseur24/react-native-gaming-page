import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { ReturnIcon } from "@/components/Icons";

export default function About() {
  return (
    <ScrollView className="ml-3 mt-10">
      <Link asChild href="/">
        <Pressable className="">
          <ReturnIcon />
        </Pressable>
      </Link>

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
  );
}
