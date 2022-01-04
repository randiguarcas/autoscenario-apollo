import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLList } from "graphql";
import { make } from "@prisma/client";
import { IApolloServerContext } from "@src/lib/interfaces/IApolloServerContext";
import { getAllBooks } from "@src/data/bookService";
import BookType from "@src/graphql/schema/typedefs/BookType";

export const getAllBooksQueryResolver: GraphQLFieldResolver<
  unknown,
  IApolloServerContext
> = async (_source, _args, _context, _info): Promise<make[]> => {
  const books = await getAllBooks();
  return books;
};

const getAllBooksQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: "Get all books query",
  type: new GraphQLList(BookType),
  resolve: getAllBooksQueryResolver,
};

export default getAllBooksQuery;
