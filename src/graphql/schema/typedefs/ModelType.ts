import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";

import MakeType from "./MakeType";

const ModelType: GraphQLObjectType = new GraphQLObjectType({
  name: "Model",
  description: "All models",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "id of model",
    },
    name: {
      type: GraphQLString,
      description: "name of model",
    },
    code: {
      type: GraphQLString,
      description: "name of model",
    },
    slug: {
      type: GraphQLString,
      description: "name of model",
    },
    make_id: {
      type: GraphQLString,
      description: "name of model",
    },
    enabled: {
      type: GraphQLBoolean,
      description: "enabled of model",
    },
    make: {
      type: MakeType,
      description: "author of book",
    },
  }),
});

export default ModelType;
