import { initializeFirebase } from './firebase';
import { initBugSnag, BugSnag } from './bugsnag';
import { initApolloClient } from './graphql/Apollo';

type DataLayerInit = {
  BugSnag: BugSnag;
};

export function initializeDataLayer(): DataLayerInit {
  initializeFirebase();
  const BugSnag = initBugSnag();
  initApolloClient();

  return {
    BugSnag,
  };
}
