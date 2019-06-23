import {
  Color,
  prisma,
  SetCreateInput,
  TokenCreateInput
} from "../generated/prisma-client";

export async function addSet(set: any) {
  try {
    console.log(`Adding Set ${set.name}`);
    let code = set.code;
    let data: SetCreateInput = {
      block: set.block,
      code,
      name: set.name,
      releaseDate: new Date(set.releaseDate),
      type: set.type.toUpperCase()
    };
    await prisma.upsertSet({
      where: {
        code
      },
      create: data,
      update: data
    });
  } catch (e) {
    console.error(`Error on Token ${set.name}`);
  }
}

export async function addToken(token: any, set: any) {
  try {
    console.log(`Adding Token ${token.name}`);
    const uuid: string = token.uuid;
    const data: TokenCreateInput = {
      set: {
        connect: {
          code: set.code
        }
      },
      artist: token.artist,
      borderColor: "BLACK",
      colorIdentities: {
        set: <Color[]>token.colorIdentity
      },
      colors: {
        set: <Color[]>token.colors
      },
      layout: "NORMAL",
      name: token.name,
      number: token.number,
      power: token.power,
      text: token.text,
      toughness: token.toughness,
      type: token.type,
      uuid: token.uuid,
      watermark: token.watermark
    };

    await prisma.upsertToken({
      where: {
        uuid
      },
      update: data,
      create: data
    });
  } catch (e) {
    console.error(`Error on Token ${token.uuid}`);
    console.error(e);
  }
}
