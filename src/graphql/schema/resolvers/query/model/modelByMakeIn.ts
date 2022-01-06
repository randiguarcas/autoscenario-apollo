import { model } from "@prisma/client";
import ModelType from "@src/graphql/schema/typedefs/ModelType";
import { IApolloServerContext } from "@src/lib/interfaces/IApolloServerContext";
import { searchModelByMakeIn } from "@src/repositories/model";

import {
  GraphQLFieldConfig,
  GraphQLFieldResolver,
  GraphQLID,
  GraphQLList,
} from "graphql";

export const modelByMakeIdInResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<model[]> => {
  const { makes } = _args;

  const models = await searchModelByMakeIn(makes);
  return models;
};

const modelByMakeIdIn: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: "Get models by make id array",
  type: new GraphQLList(ModelType),
  args: {
    makes: {
      type: new GraphQLList(GraphQLID),
    },
  },
};

export default modelByMakeIdIn;
