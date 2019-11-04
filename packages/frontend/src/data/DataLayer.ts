import { initializeFirebase } from './firebase';
import { initBugSnag, BugSnag } from './bugsnag';
import { initApolloClient } from './graphql/Apollo';
import { initializeAxios } from './services';

type DataLayerInit = {
  BugSnag?: BugSnag;
};

export function initializeDataLayer(): DataLayerInit {
  let BugSnag = undefined;

  try {
    initializeFirebase();
    initApolloClient();
    initializeAxios();
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
