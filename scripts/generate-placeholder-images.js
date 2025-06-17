const fs = require('fs');
const path = require('path');

// Simple SVG placeholder generator
function generatePlaceholderSVG(productName, color = '#de4915') {
  return `<svg width="800" height="800" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="800" fill="#f3f4f6"/>
  <rect x="100" y="200" width="600" height="400" rx="20" fill="${color}" opacity="0.1"/>
  <text x="400" y="380" font-family="Arial, sans-serif" font-size="48" fill="${color}" text-anchor="middle" font-weight="bold">
    ${productName.split(' ').slice(0, 2).join(' ')}
  </text>
  <text x="400" y="430" font-family="Arial, sans-serif" font-size="32" fill="#506278" text-anchor="middle">
    Premium Ayurvedic Product
  </text>
  <circle cx="400" cy="280" r="60" fill="${color}" opacity="0.2"/>
  <path d="M380 260 L400 300 L420 260" stroke="${color}" stroke-width="4" fill="none" opacity="0.4"/>
</svg>`;
}

// Product images to generate
const products = [
  { name: 'shilajit', displayName: 'Himalayan Shilajit', color: '#8b4513' },
  { name: 'ashwagandha', displayName: 'Organic Ashwagandha', color: '#228b22' },
  { name: 'triphala', displayName: 'Triphala Churna', color: '#daa520' },
  { name: 'brahmi', displayName: 'Brahmi Brain Tonic', color: '#4169e1' },
  { name: 'turmeric', displayName: 'Turmeric Curcumin', color: '#ff8c00' },
  { name: 'neem', displayName: 'Neem Leaf Powder', color: '#2e8b57' },
];

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate placeholder images
products.forEach(product => {
  // Generate 2 variants for each product
  for (let i = 1; i <= 2; i++) {
    const svg = generatePlaceholderSVG(product.displayName, product.color);
    const filename = `${product.name}-${i}.svg`;
    const filepath = path.join(imagesDir, filename);
    
    fs.writeFileSync(filepath, svg);
    console.log(`Created: ${filename}`);
  }
});

// Also create a .jpg version by creating a simple script
const convertScript = `#!/bin/bash
# Convert SVG placeholders to JPG
cd public/images
for file in *.svg; do
  # For now, we'll just copy the SVG with .jpg extension as a placeholder
  # In production, you would use a proper image
  cp "$file" "\${file%.svg}.jpg"
done
`;

fs.writeFileSync(path.join(__dirname, 'convert-images.sh'), convertScript);
fs.chmodSync(path.join(__dirname, 'convert-images.sh'), '755');

console.log('\\nPlaceholder images generated successfully!');
console.log('Note: These are SVG placeholders. Replace with actual product images for production.');