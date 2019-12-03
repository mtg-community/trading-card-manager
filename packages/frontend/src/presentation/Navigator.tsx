import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './screens/Welcome';
import { CardSearchFilter } from './screens/CardSearch/CardSearchFilter';
import { CardSearchResults } from './screens/CardSearch/CardSearchResults';
import { CardDetails } from './screens/CardSearch/CardDetails';
import { Card } from '../domain/entities/Card';

export enum ROUTES {
  WELCOME = 'Welcome',
  CARD_SEARCH_FILTER = 'CardSearchFilter',
  CARD_SEARCH_RESULTS = 'CardSearchResults',
  CARD_DETAILS = 'CardDetails',
}

export type RootParamList = {
  Welcome: undefined;
  CardSearchFilter: undefined;
  CardSearchResults: { cardsFiltered: Card[] };
  CardDetails: { card: Card };
};

const Stack = createStackNavigator<RootParamList>();

export function Navigator(): React.ReactElement {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName={ROUTES.WELCOME}>
        <Stack.Screen
          options={{ headerShown: false }}
          name={ROUTES.WELCOME}
          component={Welcome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name={ROUTES.CARD_SEARCH_FILTER}
          component={CardSearchFilter}
        />
        <Stack.Screen
          options={{ title: 'Search Results' }}
          name={ROUTES.CARD_SEARCH_RESULTS}
          component={CardSearchResults}
        />
        <Stack.Screen name={ROUTES.CARD_DETAILS} component={CardDetails} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
