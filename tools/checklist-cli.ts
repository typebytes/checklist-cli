#!/usr/bin/env node

import * as path from 'path';
import * as ncp from 'ncp';
import { buildChecklist, dumpDataToDisk, printSuccess } from './utils';
import { promisify } from 'util';
import { copyFile, mkdir } from 'fs';

export async function main() {
  const contentRelativePath = process.argv[2];

  if (!contentRelativePath) {
    console.log(`Usage: checklist-cli CONTENT_PATH [--dev]`);
    process.exit(1);
    return;
  }

  const isDev = process.argv.includes('--dev');

  const contentPath = path.join(process.cwd(), contentRelativePath);

  const srcPath = path.join(process.cwd(), 'src');
  const distBrowserPath = path.join(process.cwd(), 'dist', 'browser');

  /* Copy to src assets when in dev mode. */
  const assetsPath = path.join(isDev ? srcPath : distBrowserPath, 'assets');

  /* Don't copy app when in dev mode. */
  if (!isDev) {
    await _copyApp({ distBrowserPath });
  }
  await _copyConfig({ contentPath, assetsPath });
  await _buildChecklist({ contentPath, assetsPath });

  printSuccess('Content was successfully compiled', 'Done');
}

export async function _copyApp({ distBrowserPath }) {
  await promisify(mkdir)(distBrowserPath, { recursive: true });
  await promisify(ncp)(path.join(__dirname, '..', 'browser'), distBrowserPath);

  printSuccess(`App was successfully generated in "${distBrowserPath}"`, 'Success');
}

export async function _copyConfig({ contentPath, assetsPath }) {
  const configFileName = 'config.json';
  await promisify(copyFile)(path.join(contentPath, configFileName), path.join(assetsPath, configFileName));
  printSuccess(`config.json copied into app`, 'Success');
}

export async function _buildChecklist({ contentPath, assetsPath }) {
  const checklist = await buildChecklist(contentPath);

  dumpDataToDisk('content', checklist, assetsPath);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(2);
  });
