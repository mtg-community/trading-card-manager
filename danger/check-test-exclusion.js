import { danger, fail } from 'danger';

// Check test exclusion (.only) is included
var modifiedSpecFiles = danger.git.modified_files.filter(function(filePath) {
  return filePath.match(/-spec.(js|jsx|ts|tsx)$/gi);
});

var testFilesIncludeExclusion = modifiedSpecFiles.reduce(function(acc, value) {
  var content = fs.readFileSync(value).toString();
  var invalid =
    _.includes(content, 'it.only') || _.includes(content, 'describe.only');
  if (invalid) {
    acc.push(path.basename(value));
  }
  return acc;
}, []);

if (testFilesIncludeExclusion.length > 0) {
  fail('an `only` was left in tests (' + testFilesIncludeExclusion + ')');
}
