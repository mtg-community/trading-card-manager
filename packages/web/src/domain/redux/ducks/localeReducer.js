const INITIAL_STATE = 'en';
const SET_LOCALE = 'locale/set';

export const localeSelector = state => state.locale;

export const setLocaleAction = locale => ({
  type: SET_LOCALE,
  locale: locale,
});

export const setLocaleHandle = (state, action) => {
  return action.locale;
};

export default function localeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOCALE:
      return setLocaleHandle(state, action);
    default:
      return state;
  }
}
