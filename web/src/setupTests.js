import 'jest-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findActionByType } from 'core/frameworks/redux/__mocks__/asyncActions';
import diff from 'jest-diff';

Enzyme.configure({ adapter: new Adapter() });

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
