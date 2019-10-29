import { initializeFirebase } from './firebase';
import { initBugSnag, BugSnag } from './bugsnag';
import { initApolloClient } from './graphql/Apollo';
import ApolloClient from 'apollo-client';

type DataLayerInit = {
  BugSnag: BugSnag;
  ApolloClient: ApolloClient<unknown>;
};

export function initializeDataLayer(): DataLayerInit {
  initializeFirebase();
  const BugSnag = initBugSnag();
  const ApolloClient = initApolloClient();

  return {
    BugSnag,
    ApolloClient,
  };
}
