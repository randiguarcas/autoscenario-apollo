//Queries root types
import { GraphQLObjectType } from 'graphql';
// import getAllAuthorsQuery from '@src/graphql/schema/resolvers/query/getAllAuthorsQuery';
import getAllBooksQuery from '@src/graphql/schema/resolvers/query/getAllBooksQuery';
import getAllMakesQuery from "@src/graphql/schema/resolvers/query/make/getAllMakesQuery";
import getMakeQuery from '@src/graphql/schema/resolvers/query/make/getMakeQuery';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery,
    // getAllMakes: getAllMakesQuery,
    getMake: getMakeQuery
    // authors: getAllAuthorsQuery,
  },
});

export default queryType;