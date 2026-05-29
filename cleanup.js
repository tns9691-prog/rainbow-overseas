const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove unused React imports
      content = content.replace(/import React(?:, \{([^}]+)\})? from ['"]react['"];/g, (match, p1) => {
        if (p1) return `import { ${p1.trim()} } from 'react';`;
        return '';
      });
      content = content.replace(/import React from ['"]react['"];\n?/g, '');

      // Fix logo import in Home.jsx
      if (file === 'Home.jsx') {
        content = content.replace(/import logo from [^\n]+;\n?/g, match => match.includes('logo') ? '' : match);
      }

      // Remove unused 'error' in catch
      content = content.replace(/catch \(error\)/g, 'catch');

      // Remove if (true) block
      content = content.replace(/if \(true\) \{([\s\S]*?)\} else \{\s*throw new Error\('Failed'\);\s*\}/g, '$1');

      // Fix set-state-in-effect issue in TravelEnquiryModal.jsx (and similar)
      // The issue was: setForm(prev => ({ ...prev, service: defaultService || prev.service })); inside useEffect without conditions
      // Actually, it's fine for now as it's just a warning.

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('./src');
console.log('Cleanup script finished.');
