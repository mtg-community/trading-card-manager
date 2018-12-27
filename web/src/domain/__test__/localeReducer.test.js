import { localeReducer, setLocaleAction } from '../redux/ducks/localeReducer';

it('should change locale', function () {
  const INITIAL_STATE = '';

  const expectedState = 'en';

  expect(localeReducer(INITIAL_STATE,setLocaleAction('en'))).toEqual(expectedState)
}); 
