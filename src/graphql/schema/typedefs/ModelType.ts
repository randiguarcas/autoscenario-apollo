import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";

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
    enabled: {
      type: GraphQLBoolean,
      description: "enabled of model",
    },
  }),
});

export default ModelType;
