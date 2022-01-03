import { ApolloServer } from "apollo-server";
import dotenv from "dotenv-safe";
import { performAstCodegen } from "@src/codegen";
import apolloServerConfig from "@src/lib/config/apolloServerConfig";

dotenv.config();

const startServer = () => {
  performAstCodegen();
  const server = new ApolloServer(apolloServerConfig);

  server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
      console.log(`🚀 Apollo server ready at ${url}`);
    })
    .catch((err) => console.log("Error launching server", err));
};

startServer();
