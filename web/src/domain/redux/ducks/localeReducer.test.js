import localeReducer, {
  localeSelector,
  setLocaleAction,
} from './localeReducer';
import { configureTestStore } from '../testUtils';

describe('Locale', function() {
  const store = configureTestStore({ locale: localeReducer });
  const initialState = store.getState();

  it('changes i18n locale', function() {
    const locale = 'pt-br';

    const state = store.dispatch(setLocaleAction(locale));
    expect(localeSelector(state)).toEqual(locale);
  });

  it('has english as initial locale', function() {
    expect(localeSelector(initialState)).toEqual('en');
  });
});
