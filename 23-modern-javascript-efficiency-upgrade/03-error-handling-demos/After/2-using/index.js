import { open } from 'fs/promises';
import { EOL } from 'os';

await using file = await open('log.txt', 'w');

await file.writeFile('Globoticket started' + EOL);
