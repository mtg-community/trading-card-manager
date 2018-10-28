import { danger, warn } from 'danger';

// Tags big PRs
var bigPRThreshold = 600;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  const title = ':exclamation: Big PR';
  const idea = `This PR is extremely unlikely to get reviewed because it touches ${danger
    .github.pr.additions + danger.github.pr.deletions} lines.`;
  warn(`${title} - <i>${idea}</i>`);
} else if (
  danger.git.modified_files +
    danger.git.added_files +
    danger.git.deleted_files >
  bigPRThreshold
) {
  const title = ':exclamation: Big PR';
  const idea = `This PR is extremely unlikely to get reviewed because it touches ${danger
    .git.modified_files +
    danger.git.added_files +
    danger.git.deleted_files} files.`;
  warn(`${title} - <i>${idea}</i>`);
}
