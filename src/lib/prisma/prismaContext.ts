import { IPrismaContext } from "@src/lib/interfaces/IPrismaContext";
import prismaClient from "@src/lib/prisma/prismaClient";

const prismaContext: IPrismaContext = {
  prisma: prismaClient
};

export default prismaContext;
