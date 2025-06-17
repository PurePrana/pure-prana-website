#!/bin/bash
# Convert SVG placeholders to JPG
cd public/images
for file in *.svg; do
  # For now, we'll just copy the SVG with .jpg extension as a placeholder
  # In production, you would use a proper image
  cp "$file" "${file%.svg}.jpg"
done
