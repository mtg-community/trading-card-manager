import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from './screens/Welcome';
import { CardSearchFilter } from './screens/CardSearch/CardSearchFilter';
import { CardSearchResults } from './screens/CardSearch/CardSearchResults';
import { CardDetails } from './screens/CardSearch/CardDetails';
import { Card } from '../domain/entities/Card';

export const ROUTES = {
  WELCOME: 'Welcome',
  CARD_SEARCH_FILTER: 'CardSearchFilter',
  CARD_SEARCH_RESULTS: 'CardSearchResults',
  CARD_DETAILS: 'CardDetails',
};

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
      <Stack.Navigator initialRouteName="CardSearchFilter">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CardSearchFilter"
          component={CardSearchFilter}
        />
        <Stack.Screen
          options={{ title: 'Search Results' }}
          name="CardSearchResults"
          component={CardSearchResults}
        />
        <Stack.Screen name="CardDetails" component={CardDetails} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
