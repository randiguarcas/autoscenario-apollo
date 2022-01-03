import { getAllBooksQueryResolver } from "@src/graphql/schema/resolvers/query/getAllBooksQuery";

const query = {
  books: {
    resolve: getAllBooksQueryResolver,
  },
};

export default query;
