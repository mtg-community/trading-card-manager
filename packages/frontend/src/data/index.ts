import { initializeFirebase } from './firebase';
import { initBugSnag, BugSnag } from './bugsnag';

type DataLayerInit = {
  BugSnag: BugSnag;
};

export function initializeDataLayer(): DataLayerInit {
  initializeFirebase();
  const BugSnag = initBugSnag();

  return {
    BugSnag,
  };
}
