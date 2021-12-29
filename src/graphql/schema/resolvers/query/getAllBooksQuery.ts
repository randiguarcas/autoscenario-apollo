import { GraphQLList } from "graphql";
import GqlBook from "@src/graphql/schema/typedefs/GqlBook";
import { Book } from "@src/data/types/Book";

const books: Book[] = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const getAllBooksQuery = {
    type: new GraphQLList(GqlBook),
    resolve: (_source: unknown): Book[] => {
        return books;
    },
}

export default getAllBooksQuery;