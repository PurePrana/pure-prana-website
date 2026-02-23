#!/usr/bin/env node
const fs = require('fs');

const pages = [
  'app/go/hb/pcos/page.tsx',
  'app/go/hb/perimenopause/page.tsx',
  'app/go/hb/ayurvedic/page.tsx'
];

const handlerCode = `
function handleAmazonClick() {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'InitiateCheckout')
  }
  window.open(AMAZON_URL, '_blank', 'noopener,noreferrer')
}
`;

pages.forEach(file => {
  console.log(`Processing ${file}...`);
  let content = fs.readFileSync(file, 'utf8');
  
  // Add handler after AMAZON_URL const
  content = content.replace(
    /(const AMAZON_URL = '[^']*')/,
    `$1${handlerCode}`
  );
  
  // Replace anchor tags with buttons
  content = content.replace(
    /<a\s+href={AMAZON_URL}\s+target="_blank"\s+rel="noopener noreferrer"\s+className="([^"]*)"\s*>\s*([^<]+)\s*<\/a>/g,
    '<button\n          onClick={handleAmazonClick}\n          className="$1"\n        >\n          $2\n        </button>'
  );
  
  fs.writeFileSync(file, content);
  console.log(`  ✓ Updated ${file}`);
});

console.log('Done!');
