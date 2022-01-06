import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { make, model } from "@prisma/client";
import { IApolloServerContext } from "@src/lib/interfaces/IApolloServerContext";
import { seachModelByMakeId } from "@src/repositories/model";
import ModelType from "@src/graphql/schema/typedefs/ModelType";

export const getSearchModelResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<model[]> => {
  const { makeId } = _args;

  const makes = await seachModelByMakeId(makeId);
  return makes;
};

const getSearchModel: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: "Get all books query",
  type: new GraphQLList(ModelType),
  args: {
    makeId: {
      type: GraphQLString,
    }
  },
  resolve: getSearchModelResolver,
};

export default getSearchModel;