import { gql } from 'apollo-boost';
import { apolloClient } from '../Apollo';
import { Card as ApiCard, CardFilter } from '../../../../types/graphql-api';
import { Card } from '../../../domain/entities/Card';
import { omit } from 'ramda';

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
      subtypes
      supertypes
      types
      loyalty
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

const sampleCardListQuery = gql`
  query {
    sampleCardList {
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
      subtypes
      supertypes
      types
      loyalty
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

const sampleCardListFilteredQuery = gql`
  query($filter: CardFilter) {
    sampleCardListFiltered(filter: $filter) {
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
      subtypes
      supertypes
      types
      loyalty
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

interface SampleCardListQueryData {
  sampleCardList: ApiCard[];
}

interface SampleCardListFilteredQueryData {
  sampleCardListFiltered: ApiCard[];
}

function mapApiResponseToDomainModel(response: ApiCard): Card {
  return omit(['__typename'], response);
}

export async function querySampleCard(): Promise<Card> {
  const response = await apolloClient.query<SampleCardQueryData>({
    query: sampleCardQuery,
  });

  return mapApiResponseToDomainModel(response.data.sampleCard);
}

export async function querySampleCardList(): Promise<Card[]> {
  const response = await apolloClient.query<SampleCardListQueryData>({
    query: sampleCardListQuery,
  });

  return response.data.sampleCardList.map(mapApiResponseToDomainModel);
}

export async function querySampleCardListFiltered(
  filter: CardFilter,
): Promise<Card[]> {
  const response = await apolloClient.query<SampleCardListFilteredQueryData>({
    query: sampleCardListFilteredQuery,
    variables: {
      filter,
    },
  });

  return response.data.sampleCardListFiltered.map(mapApiResponseToDomainModel);
}
