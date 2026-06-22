#!/usr/bin/env node

import { mkdtemp, readdir, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cli = join(root, 'scripts', '6ducklearn-skills.mjs');
const tempRoot = await mkdtemp(join(tmpdir(), '6ducklearn-skills-smoke-'));
const target = join(tempRoot, 'codex-skills');

async function runCli(args) {
  const { stdout } = await execFileAsync(process.execPath, [cli, ...args], {
    cwd: root,
    maxBuffer: 1024 * 1024,
  });
  return stdout;
}

try {
  const listOutput = await runCli(['list']);
  if (!listOutput.includes('6ducklearn-presentation-orchestrator')) {
    throw new Error('installer list output is missing 6ducklearn-presentation-orchestrator');
  }

  await runCli(['install-codex', '--target', target, '--prefix', 'smoke-']);
  const installed = (await readdir(target)).sort();
  if (!installed.includes('smoke-presentation-orchestrator')) {
    throw new Error('install-codex did not install smoke-presentation-orchestrator');
  }

  const skillText = await readFile(join(target, 'smoke-presentation-orchestrator', 'SKILL.md'), 'utf8');
  if (!skillText.includes('name: smoke-presentation-orchestrator')) {
    throw new Error('install-codex did not rewrite the skill name with the requested prefix');
  }

  console.log(`GitHub npx installer smoke passed for ${installed.length} skills.`);
} finally {
  await rm(tempRoot, { recursive: true, force: true });
}
