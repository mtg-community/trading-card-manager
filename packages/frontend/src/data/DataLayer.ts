import { initializeFirebase } from './firebase';
import { initBugSnag, BugSnag } from './bugsnag';
import { initApolloClient } from './graphql/Apollo';

type DataLayerInit = {
  BugSnag?: BugSnag;
};

export function initializeDataLayer(): DataLayerInit {
  let BugSnag = undefined;

  try {
    initializeFirebase();
    initApolloClient();
    BugSnag = initBugSnag();

    return {
      BugSnag,
    };
  } catch (e) {
    console.info('Failed to initialize Data Layer:');
    console.error(e);

    return { BugSnag };
  }
}
