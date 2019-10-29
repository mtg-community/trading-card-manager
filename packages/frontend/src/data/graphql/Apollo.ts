import ApolloClient, { InMemoryCache } from 'apollo-boost';

export const apolloClient = new ApolloClient<InMemoryCache>({
  uri:
    'https://us-central1-trading-card-manager-mtgx.cloudfunctions.net/graphql/',
});

export function initApolloClient(): ApolloClient<InMemoryCache> {
  return apolloClient;
}
