/**
 * Promote CHANGELOG "Unreleased" bullets to a dated version section.
 * Run: npm run changelog:release -- 1.1.0
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const changelogPath = join(root, 'CHANGELOG.md');
const packagePath = join(root, 'package.json');

const version = process.argv[2]?.replace(/^v/, '');
if (!version || !/^\d+\.\d+\.\d+(-[\w.-]+)?$/.test(version)) {
  console.error('Usage: npm run changelog:release -- <semver>  (e.g. 1.1.0)');
  process.exit(1);
}

const changelog = readFileSync(changelogPath, 'utf8');
const unreleasedHeader = '## Unreleased';
const unreleasedIndex = changelog.indexOf(unreleasedHeader);

if (unreleasedIndex === -1) {
  console.error('CHANGELOG.md is missing an "## Unreleased" section.');
  process.exit(1);
}

const afterUnreleased = changelog.slice(unreleasedIndex + unreleasedHeader.length);
const nextSection = afterUnreleased.search(/\n## /);
const unreleasedBody =
  nextSection === -1 ? afterUnreleased : afterUnreleased.slice(0, nextSection);
const bullets = unreleasedBody
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line.startsWith('- '));

if (bullets.length === 0) {
  console.error('No bullet items under "## Unreleased". Add entries before releasing.');
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const newSection = `## [${version}] - ${date}\n\n${bullets.map((b) => b).join('\n')}\n`;
const before = changelog.slice(0, unreleasedIndex + unreleasedHeader.length);
const rest =
  nextSection === -1 ? '' : afterUnreleased.slice(nextSection);

const updated = `${before}\n\n${newSection}${rest.startsWith('\n') ? rest : `\n${rest}`}`;

writeFileSync(changelogPath, updated.replace(/\n{3,}/g, '\n\n'), 'utf8');

const pkg = JSON.parse(readFileSync(packagePath, 'utf8'));
pkg.version = version;
writeFileSync(packagePath, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');

console.log(`Released v${version} (${date}) — ${bullets.length} item(s) promoted from Unreleased.`);
