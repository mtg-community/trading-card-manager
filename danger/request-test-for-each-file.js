// Request changes to src also include changes to tests.
import { danger, warn } from 'danger';

const allFiles = danger.git.modified_files.concat(danger.git.created_files);
const hasAppChanges = allFiles.some(p => includes(p, 'src/'));
const hasTestChanges = allFiles.some(p => includes(p, '__tests__/'));

if (hasAppChanges && !hasTestChanges) {
  warn(
    'This PR does not include changes to tests, even though it affects app code.',
  );
}
