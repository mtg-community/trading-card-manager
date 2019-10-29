import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { GRAPHQL_API_URL } from 'react-native-dotenv';

export let apolloClient = new ApolloClient<InMemoryCache>();

export function initApolloClient(): ApolloClient<InMemoryCache> {
  apolloClient = new ApolloClient<InMemoryCache>({
    uri: GRAPHQL_API_URL,
  });
  return apolloClient;
}
