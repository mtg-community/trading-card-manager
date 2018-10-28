import { danger, warn, markdown } from 'danger';
var validateMessage = require('validate-commit-msg');

//validate commit message in PR if it conforms conventional change log, notify if it doesn't.
var messageConventionValid = danger.git.commits.reduce(function(acc, value) {
  var valid = validateMessage(value.message);
  return valid && acc;
}, true);

if (!messageConventionValid) {
  warn(
    'commit message does not follows conventional change log (' +
      ++errorCount +
      ')',
  );
  markdown(
    '> (' +
      errorCount +
      ') : RxJS uses conventional change log to generate changelog automatically. It seems some of commit messages are not following those, please check [contributing guideline](https://github.com/ReactiveX/rxjs/blob/master/CONTRIBUTING.md#commit-message-format) and update commit messages.',
  );
}
