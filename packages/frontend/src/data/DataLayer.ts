import { initializeFirebase } from './firebase';
import { initBugSnag, BugSnag } from './bugsnag';
import { initApolloClient } from './graphql/Apollo';
import { initializeAxios } from './services';

type DataLayerInit = {
  BugSnag: BugSnag;
};

export function initializeDataLayer(): DataLayerInit {
  initializeFirebase();
  initializeAxios();
  const BugSnag = initBugSnag();
  initApolloClient();

  return {
    BugSnag,
  };
}
