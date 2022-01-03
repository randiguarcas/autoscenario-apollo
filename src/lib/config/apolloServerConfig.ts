import apolloServerContext from "@src/lib/config/apolloServerContext";
import schema from "@src/graphql/schema/schema";

const apolloServerConfig = {
  schema,
  context: apolloServerContext,
  introspection: true,
  cors: {
    origin: "*",
    credentials: true,
  },
};

export default apolloServerConfig;
