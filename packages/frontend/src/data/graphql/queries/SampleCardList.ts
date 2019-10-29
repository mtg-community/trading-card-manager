import { gql } from 'apollo-boost';
import { apolloClient } from '../Apollo';
import { Card as ApiCard } from '../../../../types/graphql-api';
import { Card } from '../../../domain/entities/Card';

const sampleCardQuery = gql`
  query {
    sampleCard {
      id
      uuid
      artist
      colorIdentities
      colors
      layout
      name
      number
      power
      toughness
      text
      type
      watermark
      convertedManaCost
      flavorText
      manaCost
      multiverseId
      rarity
      printings
      subTypes
      superTypes
      types
      rulings {
        date
        text
      }
      foreignData {
        multiverseId
        flavorText
        language
        name
        text
        type
        layout
      }
    }
  }
`;

interface SampleCardQueryData {
  sampleCard: ApiCard;
}

function mapApiResponseToDomainModel(response: ApiCard): Card {
  const {
    id,
    uuid,
    artist,
    colorIdentities,
    colors,
    layout,
    name,
    number,
    power,
    toughness,
    text,
    type,
    watermark,
    convertedManaCost,
    flavorText,
    foreignData,
    manaCost,
    multiverseId,
    rarity,
    rulings,
    printings,
    subTypes,
    superTypes,
    types,
  } = response;

  return {
    id,
    uuid,
    artist,
    colorIdentities,
    colors,
    layout,
    name,
    number,
    power,
    toughness,
    text,
    type,
    watermark,
    convertedManaCost,
    flavorText,
    foreignData,
    manaCost,
    multiverseId,
    rarity,
    rulings,
    printings,
    subTypes,
    superTypes,
    types,
  };
}

export async function querySampleCard(): Promise<Card> {
  const response = await apolloClient.query<SampleCardQueryData>({
    query: sampleCardQuery,
  });

  return mapApiResponseToDomainModel(response.data.sampleCard);
}
