import {
  CardCreateInput,
  Color,
  ForeignData,
  Printing,
  prisma,
  Ruling,
  SubType,
  SuperType,
  Type
} from "../generated/prisma-client";

export async function addCard(card: any, set: any, skipRetry: boolean = false) {
  try {
    console.log(`Adding card ${card.name}`);
    const uuid: string = card.uuid;
    const data: CardCreateInput = {
      set: {
        connect: {
          code: set.code
        }
      },
      artist: card.artist,
      colorIdentities: {
        set: <Color[]>card.colorIdentity
      },
      colors: {
        set: <Color[]>card.colors
      },
      layout: "NORMAL",
      name: card.name,
      number: card.number,
      power: card.power,
      text: card.text,
      toughness: card.toughness,
      type: card.type,
      uuid: card.uuid,
      watermark: card.watermark,
      convertedManaCost: card.convertedManaCost,
      flavorText: card.flavorText,
      manaCost: card.manaCost,
      multiverseId: card.multiverseId,
      rarity: card.rarity.toUpperCase(),
      legalities: card.legalities,
      printings: {
        connect: <Printing[]>card.printings.map((name: string) => ({ name }))
      },
      subTypes: {
        connect: <SubType[]>card.subtypes.map((name: string) => ({ name }))
      },
      superTypes: {
        connect: <SuperType[]>card.supertypes.map((name: string) => ({ name }))
      },
      types: {
        connect: <Type[]>card.types.map((name: string) => ({ name }))
      }
    };

    await prisma.upsertCard({
      where: {
        uuid
      },
      update: {
        ...data
      },
      create: {
        ...data,
        foreignData: {
          create: <ForeignData[]>card.foreignData
        },
        rulings: {
          create: <Ruling[]>card.rulings
        }
      }
    });
  } catch (e) {
    const errors = e.result.errors || [];
    console.log(`Failed to add card ${card.name}`);
    console.log(JSON.stringify(errors, null, 2));
    let shouldRetry = false;
    if (
      errors.find((e: any) =>
        e.message.startsWith("No Node for the model Printing with value")
      )
    ) {
      shouldRetry = true;
      await addPrinting(card.printings).catch(console.log);
    }
    if (
      errors.find((e: any) =>
        e.message.startsWith("No Node for the model SubType with value")
      )
    ) {
      shouldRetry = true;
      await addSubTypes(card.subtypes).catch(console.log);
    }
    if (
      errors.find((e: any) =>
        e.message.startsWith("No Node for the model Type with value")
      )
    ) {
      shouldRetry = true;
      await addTypes(card.types).catch(console.log);
    }
    if (
      errors.find((e: any) =>
        e.message.startsWith("No Node for the model SuperType with value")
      )
    ) {
      shouldRetry = true;
      await addSuperTypes(card.supertypes).catch(console.log);
    }

    if (shouldRetry && !skipRetry) {
      await addCard(card, set, true);
    } else {
      console.error(`Error on Card ${card.uuid}`);
      console.error(JSON.stringify(e, null, 2));
    }
  }
}

async function addPrinting(printings: Array<string> = []) {
  for (const printing of printings) {
    await prisma.createPrinting({ name: printing }).catch(e => {
      console.log(`Failed to create printing ${printing}`);
      console.log(JSON.stringify(e, null, 2));
    });
  }
}

async function addSubTypes(subTypes: Array<string> = []) {
  for (const subType of subTypes) {
    await prisma.createSubType({ name: subType }).catch(e => {
      console.log(`Failed to create sub type ${subType}`);
      console.log(JSON.stringify(e, null, 2));
    });
  }
}

async function addTypes(types: Array<string> = []) {
  for (const type of types) {
    await prisma.createType({ name: type }).catch(e => {
      console.log(`Failed to create type ${type}`);
      console.log(JSON.stringify(e, null, 2));
    });
  }
}

async function addSuperTypes(superTypes: Array<string> = []) {
  for (const superType of superTypes) {
    await prisma.createSuperType({ name: superType }).catch(e => {
      console.log(`Failed to create super type ${superType}`);
      console.log(JSON.stringify(e, null, 2));
    });
  }
}
