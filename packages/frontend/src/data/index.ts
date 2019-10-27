import { initializeFirebase } from './firebase';
import { initBugSnag } from './bugsnag';

type DataLayerInit = {
  ErrorBoundary: React.ReactType;
};

export function initializeDataLayer(): DataLayerInit {
  initializeFirebase();
  const { ErrorBoundary } = initBugSnag();

  return {
    ErrorBoundary,
  };
}
