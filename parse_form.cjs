const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\bijja\\.gemini\\antigravity\\brain\\d1e4b95c-5e35-4619-8e22-f7c027ceb131\\.system_generated\\steps\\90\\content.md', 'utf8');

// Match <form action="...">
const formActionMatch = content.match(/<form[^>]*action="([^"]+)"/i);
console.log('Form Action:', formActionMatch ? formActionMatch[1] : 'Not found');

// Match data-params or input fields
const inputRegex = /<input[^>]*name="([^"]+)"[^>]*>/gi;
let match;
const inputs = new Set();
while ((match = inputRegex.exec(content)) !== null) {
  inputs.add(match[1]);
}
console.log('Inputs:', Array.from(inputs));

// Let's try to extract field names from FB_PUBLIC_LOAD_DATA_
const scriptMatch = content.match(/var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);\s*<\/script>/ms);
if (scriptMatch) {
  try {
    const data = JSON.parse(scriptMatch[1]);
    const fields = data[1][1];
    fields.forEach(f => {
      const title = f[1];
      const type = f[3];
      const entryId = f[4] && f[4][0] ? f[4][0][0] : 'unknown';
      let options = [];
      if (f[4] && f[4][0] && f[4][0][1]) {
        options = f[4][0][1].map(o => o[0]);
      }
      console.log(`- ${title} (Type: ${type}, Entry: entry.${entryId})`);
      if (options.length > 0) console.log(`  Options: ${options.join(', ')}`);
    });
  } catch (e) {
    console.log('Error parsing JSON data');
  }
}
