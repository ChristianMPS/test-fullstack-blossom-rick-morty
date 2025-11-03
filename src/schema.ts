import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    characters(
      name: String
      status: String
      species: String
      gender: String
      origin: String
    ): [Character]
  }

  type Character {
    id: ID!
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Location
    location: Location
    image: String
    episode: [Episode]
    created: String
  }

  type Location {
    name: String
    type: String
    dimension: String
  }

  type Episode {
    id: ID!
    name: String
    air_date: String
    episode: String
  }
`;

export default typeDefs;
