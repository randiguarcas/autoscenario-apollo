import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { make } from "@prisma/client";
import { IApolloServerContext } from "@src/lib/interfaces/IApolloServerContext";
import { list, get } from "@src/repositories/make";
import MakeType from "@src/graphql/schema/typedefs/MakeType";

export const getMakeResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<make | null> => {
  const { id } = _args;

  const makes = await get(id);
  return makes;
};

const getMake: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: "Get all books query",
  type: MakeType,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: getMakeResolver,
};

export default getMake;