import { make } from "@prisma/client";
import prismaContext from "@src/lib/prisma/prismaContext";

export const list = async (): Promise<make[]> => {
  return prismaContext.prisma.make.findMany();
};

export const get = async(id): Promise<make | null> => {
  return prismaContext.prisma.make.findUnique({
    where: {
      id
    }
  });
}