/**
 * Sync CHANGELOG.md → src/Changelog.mdx for Storybook.
 * Run: npm run changelog:sync
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const changelogPath = join(root, 'CHANGELOG.md');
const mdxPath = join(root, 'src/Changelog.mdx');

const changelog = readFileSync(changelogPath, 'utf8');

/** Drop the top-level "# Changelog" — MDX uses <Title> instead. */
const body = changelog.replace(/^# Changelog\s*\n+/, '').trim();

const mdx = `import { Meta, Title, Subtitle } from '@storybook/addon-docs/blocks';

<Meta title="Changelog" />

<Title>Changelog</Title>

<Subtitle>Notable updates to components, tokens, and documentation. Source: <code>CHANGELOG.md</code> in the repo root (synced on release).</Subtitle>

${body}
`;

writeFileSync(mdxPath, mdx, 'utf8');
console.log('Synced CHANGELOG.md → src/Changelog.mdx');
