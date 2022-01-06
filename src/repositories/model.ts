import axios from "axios";
import { model } from "@prisma/client";
import prismaContext from "@src/lib/prisma/prismaContext";

export const list = async (): Promise<model[]> => {
  return prismaContext.prisma.model.findMany();
};

export const createModel = async (
  name: string,
  code: string,
  slug: string,
  makeId: string
): Promise<model> => {
  const model = await prismaContext.prisma.model.create({
    data: {
      name,
      code,
      enabled: true,
      slug,
      make_id: makeId,
      created_by: "ADMIN",
      created_at: new Date(),
      updated_at: null,
      updated_by: null,
    },
  });

  return model;
};

export const seachModelByMakeId = async (makeId: string) => {
  let remoteModels: any = null;

  // if (!makeId) return [];
  
  const make: any = await prismaContext.prisma.make.findUnique({
    where: {
      id: makeId,
    },
    include: {
      source_provider: true,
    },
  });

  const baseUrl = make.source_provider.base_url;
  

  try {
    remoteModels = await axios.get<[]>(
      `${baseUrl}/api/vehicles/GetModelsForMakeId/${make.code}?format=json`
    );
  } catch(e) {
    console.log(e);
  }

  if (!remoteModels.data || !remoteModels.data.Results.length) {
    const localModels = await prismaContext.prisma.model.findMany({
      where: {
        make_id: make.id,
        enabled: true,
      },
    });

    return localModels;
  }

  const remoteModelsLength = remoteModels.data.Results.length;
  const localModelsCount = await prismaContext.prisma.model.count({
    where: {
      make_id: make.id,
      enabled: true,
    },
  });

  if (remoteModelsLength === localModelsCount) {
    const localModels = await prismaContext.prisma.model.findMany({
      where: {
        make_id: make.id,
        enabled: true,
      },
    });

    return localModels;
  }

  for await (const remoteModel of remoteModels.data.Results) {
    const localModel = await prismaContext.prisma.model.count({
      where: {
        code: remoteModel.Model_ID.toString(),
        name: remoteModel.Model_Name,
        enabled: true
      },
    });
    
    if (!localModel) {
      try {
        createModel(
          remoteModel.Model_Name,
          remoteModel.Model_ID.toString(),
          "",
          makeId
        );
      } catch (e) {
        console.log(e);
      }
    }
  }

  const localModels = await prismaContext.prisma.model.findMany({
    where: {
      make_id: make.id,
      enabled: true,
    },
  });

  return localModels;
};

export const searchModelByMakeIn = async (makeIn: Array<any>) => {
  const localModels = await prismaContext.prisma.model.findMany({
    where: {
      make_id: {
        in: makeIn
      },
      enabled: true,
    },
  });

  return localModels;
}