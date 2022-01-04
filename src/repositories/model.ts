import { model } from "@prisma/client";
import prismaContext from "@src/lib/prisma/prismaContext";

export const list = async (): Promise<model[]> => {
  return prismaContext.prisma.model.findMany();
};
