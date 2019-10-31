import * as path from 'path';
import { buildChecklist, dumpDataToDisk, printSuccess } from './utils';

export async function main() {
  const contentPath = path.join(process.cwd(), process.argv[2]);
  const checklist = await buildChecklist(contentPath);

  dumpDataToDisk('content', checklist, 'dist');

  printSuccess('Content was successfully compiled', 'Done');
}

main().then(() => process.exit(0));
