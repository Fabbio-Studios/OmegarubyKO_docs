const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.resolve(__dirname, '..', 'pkmnoro.js'), 'utf8');
const moveNames = new Set();
const learnsetRe = /\[\s*(\d+),\s*"([^"]+)"\s*\]/g;
let match;
while ((match = learnsetRe.exec(data))) moveNames.add(match[2]);
for (const re of [/"tms"\s*:\s*\[([^\]]*)\]/g, /"tutors"\s*:\s*\[([^\]]*)\]/g]) {
  while ((match = re.exec(data))) {
    const group = match[1];
    const names = [...group.matchAll(/"([^"]+)"/g)].map(x => x[1]);
    names.forEach(name => moveNames.add(name));
  }
}

const normalizeName = (name) => {
  return name
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/\s+/g, '-')
    .replace(/'/g, '')
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

const manual = {
  'dazzle-g': 'dazzling-gleam',
  'dr4gon-pulse': 'dragon-pulse',
  'drain-kiss': 'drain-kiss',
  'grass-whistle': 'grass-knot',
  'hidden-power': 'hidden-power',
  'mystical-fr': 'mystical-fire',
  'x-cutter': 'x-scissor',
  'sing': 'sing',
};

const fetchMove = async (move) => {
  const slug = manual[normalizeName(move)] ?? normalizeName(move);
  const url = `https://pokeapi.co/api/v2/move/${slug}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status}`);
    const json = await res.json();
    return { move, type: json.type.name.toUpperCase(), category: json.damage_class.name.toUpperCase().replace(' ', '_') };
  } catch (err) {
    return { move, slug, error: err.message };
  }
};

(async () => {
  const results = [];
  for (const move of Array.from(moveNames).sort()) {
    const result = await fetchMove(move);
    console.log(JSON.stringify(result));
    results.push(result);
    await new Promise((resolve) => setTimeout(resolve, 120));
  }
  fs.writeFileSync(path.resolve(__dirname, 'moveTypeMap.json'), JSON.stringify(results, null, 2));
})();
