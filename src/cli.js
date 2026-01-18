#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import prompts from 'prompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_ROOT = path.resolve(__dirname, '..', 'templates');

const usage = `
Usage:
  jamilvite create <project-name>
  npx jamilvite@latest create <project-name>
`;

function isEmptyDir(entries) {
  return entries.length === 0 || entries.every((entry) => entry === '.git');
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function ensureEmptyDir(targetPath) {
  if (!(await pathExists(targetPath))) {
    await fs.mkdir(targetPath, { recursive: true });
    return;
  }

  const entries = await fs.readdir(targetPath);
  if (!isEmptyDir(entries)) {
    throw new Error(`Target directory "${targetPath}" already exists and is not empty.`);
  }
}

async function copyTemplate(templateName, targetPath) {
  const templatePath = path.join(TEMPLATE_ROOT, templateName);
  await fs.cp(templatePath, targetPath, { recursive: true });
}

async function updatePackageName(targetPath, projectName) {
  const packagePath = path.join(targetPath, 'package.json');
  const raw = await fs.readFile(packagePath, 'utf8');
  const data = JSON.parse(raw);
  data.name = projectName;
  await fs.writeFile(packagePath, `${JSON.stringify(data, null, 2)}\n`);
}

async function run() {
  const [command, projectArg] = process.argv.slice(2);

  if (!command || command === '--help' || command === '-h') {
    console.log(usage.trim());
    process.exit(0);
  }

  if (command !== 'create') {
    console.error(`Unknown command: ${command}`);
    console.log(usage.trim());
    process.exit(1);
  }

  const responses = await prompts([
    {
      type: projectArg ? null : 'text',
      name: 'projectName',
      message: 'Project name',
      initial: 'my-app',
    },
    {
      type: 'toggle',
      name: 'useTypeScript',
      message: 'Use TypeScript?',
      initial: false,
      active: 'Yes',
      inactive: 'No',
    },
    {
      type: 'select',
      name: 'w3Mode',
      message: 'Choose W3.CSS inclusion mode',
      choices: [
        { title: 'cdn', value: 'cdn' },
        { title: 'local', value: 'local' },
      ],
      initial: 0,
    },
  ]);

  const projectName = projectArg || responses.projectName;
  const useTypeScript = responses.useTypeScript || false;
  const w3Mode = responses.w3Mode || 'cdn';

  if (!projectName) {
    console.error('Project name is required.');
    process.exit(1);
  }

  const targetPath = path.resolve(process.cwd(), projectName);

  try {
    await ensureEmptyDir(targetPath);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  const templateName = `template-${useTypeScript ? 'ts' : 'js'}-${w3Mode}`;

  try {
    await copyTemplate(templateName, targetPath);
    await updatePackageName(targetPath, projectName);
  } catch (error) {
    console.error('Failed to scaffold project.');
    console.error(error.message);
    process.exit(1);
  }

  console.log(`\nSuccess! Created ${projectName} at ${targetPath}`);
  console.log('Next steps:');
  console.log(`  cd ${projectName}`);
  console.log('  npm install');
  console.log('  npm run dev');
}

run();
