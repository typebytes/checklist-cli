#!/usr/bin/env node

import * as path from 'path';
import * as ncp from 'ncp';
import { buildChecklist, dumpDataToDisk, printSuccess } from './utils';
import { promisify } from 'util';
import { copyFile, mkdir } from 'fs';

export async function main() {
  const contentPath = path.join(process.cwd(), process.argv[2]);
  const distBrowserPath = path.join(process.cwd(), 'dist', 'browser');

  await _copyApp({ distBrowserPath });
  await _copyConfig({ contentPath, distBrowserPath });
  await _buildChecklist({ contentPath, distBrowserPath });

  printSuccess('Content was successfully compiled', 'Done');
}

export async function _copyApp({ distBrowserPath }) {
  await promisify(mkdir)(distBrowserPath, { recursive: true });
  await promisify(ncp)(path.join(__dirname, '..', 'browser'), distBrowserPath);

  printSuccess(`App was successfully generated in "${distBrowserPath}"`, 'Success');
}

export async function _copyConfig({ contentPath, distBrowserPath }) {
  const configFileName = 'config.json';
  await promisify(copyFile)(
    path.join(contentPath, configFileName),
    path.join(distBrowserPath, 'assets', configFileName)
  );
}

export async function _buildChecklist({ contentPath, distBrowserPath }) {
  const checklist = await buildChecklist(contentPath);

  dumpDataToDisk('content', checklist, path.join(distBrowserPath, 'assets'));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
