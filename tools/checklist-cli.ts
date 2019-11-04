#!/usr/bin/env node

import * as path from 'path';
import * as ncp from 'ncp';
import { buildChecklist, dumpDataToDisk, printSuccess } from './utils';
import { promisify } from 'util';
import { mkdir } from 'fs';

export async function main() {
  const distBrowserPath = path.join('dist', 'browser');
  await _copyApp({ distBrowserPath });
  await _buildChecklist({ distBrowserPath });
}

export async function _copyApp({ distBrowserPath }) {
  await promisify(mkdir)(distBrowserPath, { recursive: true });
  await promisify(ncp)(path.join(__dirname, '..', 'browser'), distBrowserPath);

  printSuccess(`App was successfully generated in "${distBrowserPath}"`, 'Done');
}

export async function _buildChecklist({ distBrowserPath }) {
  const contentPath = path.join(process.cwd(), process.argv[2]);
  const checklist = await buildChecklist(contentPath);

  dumpDataToDisk('content', checklist, path.join(distBrowserPath, 'assets'));

  printSuccess('Content was successfully compiled', 'Done');
}

main().then(() => process.exit(0));
