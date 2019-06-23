import { addCard } from "./prisma/seed/card";
import { addToken, addSet } from "./prisma/seed/set";
import DOM from "./prisma/seed/json/DOM.json";
import GRN from "./prisma/seed/json/GRN.json";
import RNA from "./prisma/seed/json/RNA.json";
import WAR from "./prisma/seed/json/WAR.json";

async function addSetTokensAndCards(set: any) {
  const tokens: any[] = set.tokens;
  const cards: any[] = set.cards;
  await addSet(set);
  for (const token of tokens) {
    await addToken(token, set);
  }
  for (const card of cards) {
    await addCard(card, set);
  }
}

async function main() {
  await addSetTokensAndCards(RNA);
  await addSetTokensAndCards(GRN);
  await addSetTokensAndCards(DOM);
  // await addSetTokensAndCards(WAR);
}

main().catch(e => console.error(e));
