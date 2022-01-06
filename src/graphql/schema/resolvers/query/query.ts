// import { getListResolver } from "@src/graphql/schema/resolvers/query/make/getAllMakesQuery";

import { getAllBooksQueryResolver } from "@src/graphql/schema/resolvers/query/getAllBooksQuery";
import { getMakeResolver } from "./make/getMakeQuery";
import { modelByMakeIdInResolver } from "./model/modelByMakeIn";
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
  model_by_make_id: {
    resolve: getSearchModelResolver
  },
  model_by_make_in: {
    resolve: modelByMakeIdInResolver
  }
};

export default query;
