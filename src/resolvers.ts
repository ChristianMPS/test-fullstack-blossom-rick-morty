import axios from "axios";

const resolvers = {
  Query: {
    characters: async (
      _: unknown,
      { name, status, species, gender, origin }: {
        name?: string;
        status?: string;
        species?: string;
        gender?: string;
        origin?: string;
      }
    ) => {
      try {
        const params: any = {};

        if (name) params.name = name;
        if (status) params.status = status;
        if (species) params.species = species;
        if (gender) params.gender = gender;

        // Petición a la API pública
        const response = await axios.get("https://rickandmortyapi.com/api/character", { params });
        let results = response.data.results;

        // Filtrado adicional por origin (no soportado directamente por la API)
        if (origin) {
          results = results.filter((char: any) =>
            char.origin?.name?.toLowerCase().includes(origin.toLowerCase())
          );
        }

        // Mapear los episodios para devolver estructura completa
        const charactersWithEpisodes = await Promise.all(
          results.map(async (char: any) => {
            const episodes = await Promise.all(
              char.episode.map(async (epUrl: string) => {
                const epData = await axios.get(epUrl);
                return epData.data;
              })
            );
            return { ...char, episode: episodes };
          })
        );

        return charactersWithEpisodes;
      } catch (error) {
        console.error("Error fetching characters:", error);
        return [];
      }
    },
  },
};

export default resolvers;
