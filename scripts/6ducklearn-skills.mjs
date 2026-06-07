#!/usr/bin/env node

import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, 'skills');
const defaultTarget = join(homedir(), '.codex', 'skills');
const defaultPrefix = '6ducklearn-';

function usage() {
  console.log(`6DuckLearn skills

Usage:
  6ducklearn-skills list
  6ducklearn-skills install-codex [--target <dir>] [--prefix <prefix>]

Examples:
  npx github:kit18/6ducklearn-skills install-codex
  npx @6ducklearn/skills install-codex
`);
}

function readOption(args, name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  const value = args[index + 1];
  if (!value || value.startsWith('--')) {
    throw new Error(`${name} requires a value`);
  }
  return value;
}

async function skillNames() {
  return (await readdir(skillsDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function withCodexName(text, codexName) {
  if (!text.startsWith('---\n')) return text;
  return text.replace(/^name:\s*.+$/m, `name: ${codexName}`);
}

async function installCodex(args) {
  const target = resolve(readOption(args, '--target', process.env.CODEX_SKILLS_DIR || defaultTarget));
  const prefix = readOption(args, '--prefix', defaultPrefix);
  const skills = await skillNames();

  await mkdir(target, { recursive: true });

  for (const skill of skills) {
    const codexName = `${prefix}${skill}`;
    const destination = join(target, codexName);
    await cp(join(skillsDir, skill), destination, { recursive: true, force: true });

    const skillFile = join(destination, 'SKILL.md');
    const text = await readFile(skillFile, 'utf8');
    await writeFile(skillFile, withCodexName(text, codexName));
  }

  console.log(`Installed ${skills.length} 6DuckLearn skills to ${target}`);
  console.log(skills.map((skill) => `- ${prefix}${skill}`).join('\n'));
  console.log('Restart Codex to refresh the available skill list if needed.');
}

async function listSkills() {
  const skills = await skillNames();
  console.log(skills.map((skill) => `${defaultPrefix}${skill}`).join('\n'));
}

async function main() {
  const [command, ...args] = process.argv.slice(2);

  if (!command || command === '--help' || command === '-h' || command === 'help') {
    usage();
    return;
  }

  if (command === 'list') {
    await listSkills();
    return;
  }

  if (command === 'install-codex') {
    await installCodex(args);
    return;
  }

  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
