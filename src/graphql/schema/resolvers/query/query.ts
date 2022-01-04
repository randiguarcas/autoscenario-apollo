import { getListResolver } from "@src/graphql/schema/resolvers/query/make/getAllMakesQuery";

import { getAllBooksQueryResolver } from "@src/graphql/schema/resolvers/query/getAllBooksQuery";
import { getMakeResolver } from "./make/getMakeQuery";

const query = {
  books: {
    resolve: getAllBooksQueryResolver,
  },
  // getAllMakes: {
  //   resolve: getListResolver
  // },
  getMake: {
    resolve: getMakeResolver
  }
};
console.log(query)
export default query;
