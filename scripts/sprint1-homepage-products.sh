#!/bin/bash

# Sprint 1: Homepage with Amazon Product Links Bundle
# Consolidates issues: #10, #11, #13, #15
# Delivers: Complete homepage with product cards linking to Amazon

echo "Sprint 1: Homepage with Amazon Product Links Bundle"
echo "=================================================="
echo "Consolidating issues: #10, #11, #13, #15"
echo ""

# Check authentication
if ! gh auth status >/dev/null 2>&1; then
    echo "Error: Not authenticated with GitHub CLI"
    echo "Please run: gh auth login"
    exit 1
fi

# Create a new consolidated issue
echo "Creating consolidated issue..."
gh issue create \
  --repo PurePrana/pure-prana-website \
  --title "[SPRINT-1-BUNDLE] Homepage with Amazon Product Cards" \
  --body "## Consolidated Sprint 1 Deliverable

This issue consolidates the following tasks to deliver a complete homepage with product cards that link directly to Amazon:

### Included Issues:
- #10: Create homepage with hero section
- #11: Build reusable Product Card component  
- #13: Implement Amazon affiliate link tracking
- #15: Optimize images with Next.js Image component

### Deliverables:
1. **Homepage with Hero Section**
   - Hero banner with brand messaging
   - Featured products section
   - Value propositions (Why Ayurveda, Why Pure Prana)
   - Newsletter signup section

2. **Product Card Components**
   - Reusable ProductCard component with:
     - Product image (optimized)
     - Product name
     - Brief description
     - Price (static or from Amazon API)
     - 'Buy on Amazon' button with affiliate link
   - Hover effects and micro-interactions
   - Responsive grid layout

3. **Amazon Integration**
   - Affiliate link tracking setup
   - Proper nofollow/sponsored attributes
   - Click tracking for analytics
   - Open Amazon links in new tab

4. **Performance & SEO**
   - Optimized images with Next.js Image component
   - Lazy loading for below-fold content
   - Proper alt texts for accessibility
   - Fast page load times

### Success Criteria:
- [ ] Homepage loads with hero and product grid
- [ ] Product cards display with optimized images
- [ ] Amazon affiliate links work correctly
- [ ] All images are optimized and responsive
- [ ] Lighthouse performance score > 90
- [ ] Mobile responsive on all screen sizes
- [ ] Affiliate tracking is implemented

### Technical Notes:
- Use Next.js 14 App Router
- Implement with TypeScript
- Style with Tailwind CSS
- Product data can be stored in a local JSON/TypeScript file
- No need for product detail pages - cards link directly to Amazon

This consolidated approach ensures we deliver a complete, functional homepage that drives traffic to Amazon for purchases." \
  --label "enhancement,sprint-1,priority-high,consolidated" \
  --assignee "@me"

echo ""
echo "Consolidated issue created successfully!"
echo ""
echo "Next steps:"
echo "1. Review and close related individual issues"
echo "2. Start implementation of the homepage"
echo "3. Ensure Amazon affiliate tracking is properly set up"