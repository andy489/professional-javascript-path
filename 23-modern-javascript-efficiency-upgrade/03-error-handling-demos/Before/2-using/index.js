import { open } from 'fs/promises';
import { EOL } from 'os';

const file = await open('log.txt', 'w');

try {
  await file.writeFile('Globoticket started' + EOL);
} finally {
  await file.close();
}
