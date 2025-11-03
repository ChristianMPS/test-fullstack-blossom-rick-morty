import axios from "axios";

const resolvers = {
  Query: {
    characters: async (_: unknown, { name }: { name?: string }) => {
      const { data } = await axios.get("https://rickandmortyapi.com/api/character", {
        params: { name },
      });
      return data.results;
    },
  },
  Character: {
    origin: async (parent: any) => {
      if (!parent.origin?.url) return null;
      const { data } = await axios.get(parent.origin.url);
      return data;
    },
    location: async (parent: any) => {
      if (!parent.location?.url) return null;
      const { data } = await axios.get(parent.location.url);
      return data;
    },
    episode: async (parent: any) => {
      const episodeUrls = parent.episode || [];
      const requests = episodeUrls.map((url: string) => axios.get(url));
      const responses = await Promise.all(requests);
      return responses.map((r) => r.data);
    },
  },
};

export default resolvers;
