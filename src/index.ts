import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import typeDefs from "./schema";
import resolvers from "./resolvers";

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(bodyParser.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}/graphql`);
  });
}

startServer();
