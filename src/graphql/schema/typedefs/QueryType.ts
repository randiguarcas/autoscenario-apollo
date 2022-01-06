//Queries root types
import { GraphQLObjectType } from 'graphql';
// import getAllAuthorsQuery from '@src/graphql/schema/resolvers/query/getAllAuthorsQuery';
import getAllBooksQuery from '@src/graphql/schema/resolvers/query/getAllBooksQuery';
// import getAllMakesQuery from "@src/graphql/schema/resolvers/query/make/getAllMakesQuery";
import getMakeQuery from '@src/graphql/schema/resolvers/query/make/getMakeQuery';
import getSearchModelQuery from '@src/graphql/schema/resolvers/query/model/searchModelQuery';
import modelByMakeIdIn from '../resolvers/query/model/modelByMakeIn';

const queryType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery,
    // getAllMakes: getAllMakesQuery,
    getMake: getMakeQuery,
    model_by_make_id: getSearchModelQuery,
    model_by_make_in: modelByMakeIdIn
    // authors: getAllAuthorsQuery,
    // searchModel: searchModel
  },
});

export default queryType;