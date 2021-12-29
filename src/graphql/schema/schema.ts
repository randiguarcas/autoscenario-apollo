import { GraphQLSchema } from "graphql";
import query from "@src/graphql/schema/resolvers/query/query";

const schema: GraphQLSchema = new GraphQLSchema({
  query,
});

export default schema;
