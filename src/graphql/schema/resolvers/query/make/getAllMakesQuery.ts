import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from "graphql";
import { make } from "@prisma/client";
import { IApolloServerContext } from "@src/lib/interfaces/IApolloServerContext";
import { list } from "@src/repositories/make";
import MakeType from "@src/graphql/schema/typedefs/MakeType";

export const getListResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<make[]> => {
  const makes = await list();
  return makes;
};

const getAllMakes: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: "Get all books query",
  type: new GraphQLList(MakeType),
  resolve: getListResolver,
};

export default getAllMakes;
