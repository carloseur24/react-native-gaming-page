const credentials = require("./api-credentials.json");

interface Platform {
  id: number;
  name: string;
  shortName: string;
  releaseDate: Date | string; // Pode ser Date ou string dependendo do formato desejado
  imageSrc?: string; // Opcional para plataformas que não têm imagem
  _id?: string; // Opcional, pois pode variar se é usado em todos os casos
}

interface Images {
  box: {
    og: string;
    sm: string;
  };
  banner: {
    og: string;
    sm: string;
  };
}

export interface GameDetails {
  images: Images;
  image: string;
  tags?: any[];
  topCriticScore?: number;
  tier: string;
  slug: string;
  name: string;
  Platforms: Platform[];
  id: number;
  firstReleaseDate: Date | string;
}

export async function getLatestGames() {
  const items = await apiGetter();
  // const items = require("./data-mock.json");
  const promises = items.map(async (item: GameDetails) => {
    const {
      Platforms,
      name,
      id,
      firstReleaseDate,
      topCriticScore,
      // images,
      // image,
    } = item;
    const image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglt8efxtW_wHjgxJJEODKDJaMFzO9--fj5I7O8qCmI3EP2DFACkLnbty2wySZACxfUBsS";

    console.log(item);
    const slug = name.replace(/\s/g, "-").toLowerCase();

    // const image = imageGetter(images.banner?.og);

    return {
      Platforms,
      name,
      id,
      firstReleaseDate,
      topCriticScore,
      image,
      slug,
    };
  });
  return Promise.all(promises);
}

const imageGetter = (imageId: string) => {
  return `https://img.opencritic.com/${imageId}`;
};

const apiGetter = async (gameId?: number, limit?: number) => {
  const GAMES_API = "https://opencritic-api.p.rapidapi.com/game";
  // const GAMES_API = "./data-mock.json";

  const paramFormat = new URLSearchParams({
    skip: (limit ?? "").toString(),
    sort: "newest",
  }).toString();
  const params = limit !== undefined ? `?${paramFormat}` : "";
  const gameIdUri = gameId !== undefined ? "/" + gameId : "";

  const final_endpoint = `${GAMES_API}${gameIdUri}${params}`;

  try {
    const rawData = await fetch(final_endpoint, {
      headers: {
        "x-rapidapi-key": credentials["x-rapidapi-key"],
        "x-rapidapi-host": credentials["x-rapidapi-host"],
      },
    });
    const items = await rawData.json();
    return items;
  } catch (error) {
    console.log(error);
  }
};

export type { GameDetails as GameType };
