import diff from 'jest-diff';
import { ReduxAdapter } from '../reduxAdapter';
import { configureStore, resetStateAction } from '../store';
import { mockReduxAdapter } from './reduxAdapter';
import { findActionByType } from './asyncActions';

export const configureTestStore = (
  adapter: ReduxAdapter,
  appSpecificMiddleware: Array<Function> = [],
  appSpecificReducers: { [string]: Function } = {},
) => {
  const store = configureStore(
    mockReduxAdapter,
    [actionHistoryMiddleware],
    appSpecificReducers,
  );

  store.getActions = function() {
    return actionHistoryMiddleware.getActions();
  };

  store.reset = function() {
    store.dispatch(resetStateAction());
    actionHistoryMiddleware.clearHistory();
  };

  store.adapter = mockReduxAdapter;

  return store;
};

function actionHistoryMiddleware(store) {
  let actions = [];

  actionHistoryMiddleware.clearHistory = function() {
    actions = [];
  };

  actionHistoryMiddleware.getActions = function() {
    return actions;
  };

  return next => action => {
    actions.push(action);
    return next(action);
  };
}

expect.extend({
  async toEventuallyDispatch(store, expectedAction) {
    const hint = this.utils.matcherHint('.toEventuallyDispatch');

    try {
      const actionFound = await findActionByType(store, expectedAction);

      const pass = this.equals(actionFound, expectedAction);

      const message = pass
        ? () => 'The action was found, when it should NOT have been found'
        : () => {
            const difference = diff(expectedAction, actionFound, {
              expand: this.expand,
            });

            return `\n${hint}\nAn action with the same type was dispatched, but failed in deepComparison\nExpected: ${this.utils.printExpected(
              expectedAction,
            )}\nReceived: ${this.utils.printReceived(
              actionFound,
            )}\nDifference:\n${difference}\n`;
          };

      return { message, pass };
    } catch (e) {
      return {
        message: () =>
          `\n${hint}\nNo action with the type "${e.type}" was dispatched in ${
            e.timeout
          }ms.\n${
            e.actions.length
          } actions were dispatched:\n${this.utils.stringify(e.actions)}`,
        pass: false,
      };
    }
  },
});
