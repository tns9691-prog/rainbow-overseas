const fs = require('fs');

const files = [
  'src/components/AbroadEnquiryModal.jsx',
  'src/components/ContactEnquiryModal.jsx',
  'src/components/TravelEnquiryModal.jsx',
  'src/pages/AbroadEducation.jsx',
  'src/pages/Contact.jsx',
  'src/pages/Finance.jsx',
  'src/pages/Home.jsx',
  'src/pages/Insurance.jsx',
  'src/pages/TravelHolidays.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/const response = await fetch\((.+?),\s*\{(.+?)body:(.+?)\n\s*\}\);\n\s*if\s*\(response\.ok\)\s*\{/s,
    "await fetch($1, {$2body:$3,\n        mode: 'no-cors',\n        headers: { 'Content-Type': 'text/plain' }\n      });\n      if (true) {");
  fs.writeFileSync(file, content);
});
console.log('Fixed fetch in all files.');
