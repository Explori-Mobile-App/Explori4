#!/bin/bash
# Quick script to create basic app icons

echo "Creating basic app icons for Explori PWA..."

# Create a simple SVG icon and convert to PNG
# This creates a basic orange square with "E" text
cat > /tmp/icon.svg << 'EOF'
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#ff6b35" rx="64"/>
  <text x="256" y="320" font-family="Arial, sans-serif" font-size="280" fill="white" text-anchor="middle" font-weight="bold">E</text>
</svg>
EOF

# If you have ImageMagick or similar, convert SVG to PNG
# convert /tmp/icon.svg -resize 192x192 /public/icon-192.png
# convert /tmp/icon.svg -resize 512x512 /public/icon-512.png

echo "Icon template created. You can use online converters to create PNG icons."
echo "Or use the favicon.io generator as mentioned in the guide."