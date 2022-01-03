import { make } from "@prisma/client";
import prismaContext from "@src/lib/prisma/prismaContext";

export const getAllBooks = async (): Promise<make[]> => {
    return prismaContext.prisma.make.findMany();
}