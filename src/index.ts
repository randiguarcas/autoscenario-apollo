import { ApolloServer, gql } from "apollo-server";
import dotenv from "dotenv-safe";
import schema from "@src/graphql/schema/schema";
import { performAstCodegen } from "@src/codegen";

dotenv.config();

const server = new ApolloServer({
  cors: {
    origin: "*",
    credentials: true,
  },
  schema,
  introspection: true
});

performAstCodegen();

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Apollo server ready at ${url}`);
});
