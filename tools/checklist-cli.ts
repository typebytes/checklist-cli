#!/usr/bin/env node

import * as path from 'path';
import * as ncp from 'ncp';
import { buildChecklist, dumpDataToDisk, printSuccess } from './utils';
import { promisify } from 'util';
import { copyFile, mkdir } from 'fs';

export async function main() {
  const contentRelativePath = process.argv[2];

  if (!contentRelativePath) {
    console.log(`Usage: checklist-cli CONTENT_PATH [--skip-app-copy]`);
    process.exit(1);
    return;
  }

  const skipAppCopy = process.argv.includes('--skip-app-copy');

  const contentPath = path.join(process.cwd(), contentRelativePath);
  const distBrowserPath = path.join(process.cwd(), 'dist', 'browser');

  if (!skipAppCopy) {
    await _copyApp({ distBrowserPath });
  }
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
  printSuccess(`config.json copied into app`, 'Success');
}

export async function _buildChecklist({ contentPath, distBrowserPath }) {
  const checklist = await buildChecklist(contentPath);

  dumpDataToDisk('content', checklist, path.join(distBrowserPath, 'assets'));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(2);
  });
