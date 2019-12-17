import { initializeAsync } from 'expo-facebook';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';
import { initializeFirebase } from './firebase';
import { BugSnag, initBugSnag } from './bugsnag';
import { initApolloClient } from './graphql/Apollo';
import { initializeAxios } from './services';

type DataLayerInit = {
  BugSnag?: BugSnag;
};

export function initializeDataLayer(): DataLayerInit {
  let BugSnag = undefined;
  const APP_NAME = 'mtgx frontend';

  try {
    initializeAsync(FACEBOOK_APP_ID, APP_NAME);
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
