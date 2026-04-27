const fs = require('fs');
const path = require('path');
const text = fs.readFileSync(path.resolve(__dirname, '../pkmnoro.js'), 'utf8');
const names = new Set();
const learnsetRe = /\[\s*(\d+),\s*"([^"]+)"\s*\]/g;
let m;
while ((m = learnsetRe.exec(text))) {
  names.add(m[2]);
}
const tmsRe = /"tms"\s*:\s*\[([^\]]*)\]/g;
while ((m = tmsRe.exec(text))) {
  const arr = m[1].match(/"([^"]+)"/g) || [];
  arr.forEach(s => names.add(s.slice(1, -1)));
}
const tutorsRe = /"tutors"\s*:\s*\[([^\]]*)\]/g;
while ((m = tutorsRe.exec(text))) {
  const arr = m[1].match(/"([^"]+)"/g) || [];
  arr.forEach(s => names.add(s.slice(1, -1)));
}
const out = Array.from(names).sort();
console.log(JSON.stringify(out, null, 2));
console.log('TOTAL', out.length);
