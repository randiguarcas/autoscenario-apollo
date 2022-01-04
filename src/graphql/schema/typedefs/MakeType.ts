import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} from "graphql";

const MakeType: GraphQLObjectType = new GraphQLObjectType({
  name: "Make",
  description: "All makes",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "id of make",
    },
    name: {
      type: GraphQLString,
      description: "name of make",
    },
    enabled: {
        type: GraphQLBoolean,
        description: "enabled of make"
    },
    code: {
      type: GraphQLString,
      description: "code of make"
    },
    slug: {
      type: GraphQLString,
      description: "slug of make"
    },
    logo: {
      type: GraphQLString,
      description: "logo of make"
    }
  }),
});

export default MakeType;
