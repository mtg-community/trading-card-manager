import { configureTestStore as configureCoreStore } from 'core/testUtils';
import { appSpecificReducers } from '../index';

export function configureTestStore() {
  return configureCoreStore(appSpecificReducers);
}
