// import { getListResolver } from "@src/graphql/schema/resolvers/query/make/getAllMakesQuery";

import { getAllBooksQueryResolver } from "@src/graphql/schema/resolvers/query/getAllBooksQuery";
import { getMakeResolver } from "./make/getMakeQuery";
import { getSearchModelResolver } from "./model/searchModelQuery";

const query = {
  books: {
    resolve: getAllBooksQueryResolver,
  },
  // getAllMakes: {
  //   resolve: getListResolver
  // },
  getMake: {
    resolve: getMakeResolver
  },
  models_make: {
    resolve: getSearchModelResolver
  }
};

export default query;
