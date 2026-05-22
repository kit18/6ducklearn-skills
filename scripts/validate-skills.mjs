import { access, readdir, readFile } from 'node:fs/promises';
import { join, dirname, relative, normalize } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const skillsDir = join(root, 'skills');
const expectedSkills = new Set([
  'approval-gate',
  'bootstrap',
  'company-research',
  'creative-design',
  'daily-growth-routes',
  'domain-product-research',
  'domain-trading',
  'go-to-market',
  'memory-grounding',
  'pkm-synthesis',
  'video-studio',
]);
const forbiddenSkills = new Set(['session-publish']);

const serviceRoleName = 'SUPABASE_' + 'SERVICE_ROLE_KEY';
const privateProjectRef = 'fqhjwdrnllsobj' + 'xiygky';
const localDeveloperPath = String.raw`/Users/` + 'kit18';
const leakageChecks = [
  { name: 'service role key reference', pattern: new RegExp(serviceRoleName, 'i') },
  { name: 'private Supabase project ref', pattern: new RegExp(privateProjectRef) },
  { name: 'local developer path', pattern: new RegExp(localDeveloperPath.replaceAll('/', '\\/')) },
  { name: 'agent-mcp-tools token hash URL', pattern: /agent-mcp-tools\/[a-f0-9]{32,}/i },
];

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const body = match[1];
  return {
    name: body.match(/^name:\s*(.+)$/m)?.[1]?.replaceAll('"', '').trim(),
    description: body.match(/^description:\s*(.+)$/m)?.[1]?.replaceAll('"', '').trim(),
  };
}

function extractLocalReferences(text) {
  const refs = new Set();
  for (const match of text.matchAll(/\]\((\.{1,2}\/[^)]+)\)/g)) refs.add(match[1]);
  for (const match of text.matchAll(/`(\.{1,2}\/[^`]+)`/g)) refs.add(match[1]);
  return [...refs].filter((ref) => !ref.includes('*'));
}

async function assertExists(path) {
  await access(path);
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    if (entry.isFile()) yield path;
  }
}

const findings = [];
const skillEntries = (await readdir(skillsDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

for (const skill of expectedSkills) {
  if (!skillEntries.includes(skill)) findings.push(`missing expected skill: ${skill}`);
}
for (const skill of skillEntries) {
  if (!expectedSkills.has(skill)) findings.push(`unexpected skill: ${skill}`);
  if (forbiddenSkills.has(skill)) findings.push(`forbidden private skill is present: ${skill}`);
}

for (const skill of skillEntries) {
  const skillPath = join(skillsDir, skill, 'SKILL.md');
  let text = '';
  try {
    text = await readFile(skillPath, 'utf8');
  } catch {
    findings.push(`${skill}/SKILL.md missing`);
    continue;
  }

  const frontmatter = parseFrontmatter(text);
  if (!frontmatter?.name || !frontmatter?.description) {
    findings.push(`${skill}/SKILL.md must include frontmatter name and description`);
  }

  for (const ref of extractLocalReferences(text)) {
    const target = normalize(join(dirname(skillPath), ref));
    if (!target.startsWith(root)) {
      findings.push(`${skill}/SKILL.md reference escapes repo: ${ref}`);
      continue;
    }
    try {
      await assertExists(target);
    } catch {
      findings.push(`${skill}/SKILL.md broken reference: ${ref}`);
    }
  }
}

for await (const file of walk(root)) {
  if (file.includes('/node_modules/') || file.includes('/.git/')) continue;
  if (file.endsWith('validate-skills.mjs')) continue;
  const text = await readFile(file, 'utf8').catch(() => '');
  for (const check of leakageChecks) {
    if (check.pattern.test(text)) {
      findings.push(`${relative(root, file)}: ${check.name}`);
    }
  }
}

if (findings.length > 0) {
  console.error('Skill validation failed:');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exit(1);
}

console.log(`Validated ${skillEntries.length} public 6DuckLearn skills.`);
