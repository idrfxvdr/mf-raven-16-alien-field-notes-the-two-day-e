import { mkdirSync, writeFileSync } from 'node:fs';

const text = '4 stars. Lovely planet, trusting locals. Only the supermarket robot saw through my disguise: "Unexpected item in the bagging area."';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
