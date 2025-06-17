#!/bin/bash

# Script to consolidate GitHub issues for Pure Prana website project
# This script will close related issues and create consolidated ones

echo "Starting issue consolidation for Pure Prana website..."

# Function to create a consolidated issue
create_consolidated_issue() {
    local title="$1"
    local body="$2"
    local labels="$3"
    local milestone="$4"
    
    echo "Creating issue: $title"
    gh issue create \
        --repo PurePrana/pure-prana-website \
        --title "$title" \
        --body "$body" \
        --label "$labels" \
        --milestone "$milestone"
}

# Function to close an issue with a comment
close_issue() {
    local issue_number="$1"
    local comment="$2"
    
    echo "Closing issue #$issue_number"
    gh issue comment $issue_number \
        --repo PurePrana/pure-prana-website \
        --body "$comment"
    gh issue close $issue_number \
        --repo PurePrana/pure-prana-website
}

# Sprint 0 Consolidations

# 1. Project Setup & Design System (Merge #1 + #3)
echo "Creating consolidated issue for Project Setup & Design System..."
body="### Description
Set up a new Next.js 14 project with TypeScript, App Router, and Tailwind CSS with custom design system.

### Acceptance Criteria
- [ ] Next.js 14 project created with TypeScript
- [ ] App Router structure set up
- [ ] Tailwind CSS installed and configured
- [ ] Custom design tokens and theme configuration
- [ ] Color palette, typography scale, and spacing system defined

### Consolidated from:
- #1: Initialize Next.js project with TypeScript
- #3: Configure Tailwind CSS and design system

**Estimated Hours**: 4"

create_consolidated_issue \
    "[SPRINT-0] Project Setup & Design System" \
    "$body" \
    "enhancement,sprint-0,priority-high,frontend" \
    "Sprint 0 - Foundation"

# 2. Component Architecture (Merge #4 + #6 + #8)
echo "Creating consolidated issue for Component Architecture..."
body="### Description
Build the foundational layout components, shared UI components, and responsive grid system.

### Acceptance Criteria
- [ ] Base layout components (Header, Footer, Layout wrapper)
- [ ] Shared UI components (Button, Card, Input, etc.)
- [ ] Mobile-first responsive grid system
- [ ] Component props and TypeScript interfaces defined
- [ ] Consistent styling patterns established

### Consolidated from:
- #4: Create base layout components
- #6: Create shared UI components
- #8: Design mobile-first responsive grid system

**Estimated Hours**: 8"

create_consolidated_issue \
    "[SPRINT-0] Component Architecture" \
    "$body" \
    "enhancement,sprint-0,priority-high,frontend" \
    "Sprint 0 - Foundation"

# 3. Development Tooling (Merge #7 + #9)
echo "Creating consolidated issue for Development Tooling..."
body="### Description
Configure code quality tools, automation, and component documentation system.

### Acceptance Criteria
- [ ] ESLint configured with Next.js rules
- [ ] Prettier configured for consistent formatting
- [ ] Husky pre-commit hooks set up
- [ ] Storybook configured for component development
- [ ] Sample stories for key components

### Consolidated from:
- #7: Setup ESLint, Prettier, and pre-commit hooks
- #9: Setup Storybook for component documentation

**Estimated Hours**: 5"

create_consolidated_issue \
    "[SPRINT-0] Development Tooling" \
    "$body" \
    "enhancement,sprint-0,priority-medium,full-stack" \
    "Sprint 0 - Foundation"

# Sprint 1 Consolidations

# 1. Product Display System (Merge #11 + #12 + #19)
echo "Creating consolidated issue for Product Display System..."
body="### Description
Create the complete product display system including cards, detail pages, and image galleries.

### Acceptance Criteria
- [ ] Reusable Product Card component with hover effects
- [ ] Product detail page template with all sections
- [ ] Image gallery with zoom functionality
- [ ] Responsive design for all components
- [ ] Loading and error states

### Consolidated from:
- #11: Build reusable Product Card component
- #12: Create product detail page template
- #19: Add product image gallery with zoom

**Estimated Hours**: 10"

create_consolidated_issue \
    "[SPRINT-1] Product Display System" \
    "$body" \
    "enhancement,sprint-1,priority-high,frontend" \
    "Sprint 1 - Core Pages"

# 2. SEO Implementation (Merge #14 + #18)
echo "Creating consolidated issue for SEO Implementation..."
body="### Description
Implement comprehensive SEO features including structured data and social sharing tags.

### Acceptance Criteria
- [ ] Schema.org structured data for products
- [ ] Open Graph tags for all pages
- [ ] Twitter Card tags
- [ ] Dynamic meta tags based on content
- [ ] SEO component for easy implementation

### Consolidated from:
- #14: Add structured data for products
- #18: Setup Open Graph tags for social sharing

**Estimated Hours**: 4"

create_consolidated_issue \
    "[SPRINT-1] SEO Implementation" \
    "$body" \
    "enhancement,sprint-1,priority-high,frontend" \
    "Sprint 1 - Core Pages"

# Sprint 2 Consolidations

# 1. Blog Core Infrastructure (Merge #21 + #22 + #23)
echo "Creating consolidated issue for Blog Core Infrastructure..."
body="### Description
Set up complete blog infrastructure with MDX, listing pages, and post templates.

### Acceptance Criteria
- [ ] MDX configured with custom components
- [ ] Blog listing page with pagination
- [ ] Blog post template with table of contents
- [ ] Category and tag support
- [ ] SEO optimization for blog posts

### Consolidated from:
- #21: Setup MDX blog infrastructure
- #22: Create blog listing page with pagination
- #23: Build blog post template with TOC

**Estimated Hours**: 10"

create_consolidated_issue \
    "[SPRINT-2] Blog Core Infrastructure" \
    "$body" \
    "enhancement,sprint-2,priority-high,full-stack" \
    "Sprint 2 - Content System"

# 2. Blog Enhancement Features (Merge #26 + #27 + #30 + #31)
echo "Creating consolidated issue for Blog Enhancement Features..."
body="### Description
Add engagement and discovery features to blog posts.

### Acceptance Criteria
- [ ] Reading time calculator and display
- [ ] Author information component
- [ ] Related posts algorithm and display
- [ ] Reaction/like system
- [ ] Social media share buttons with counts

### Consolidated from:
- #26: Add reading time and author info
- #27: Implement related posts feature
- #30: Add blog post reactions/likes
- #31: Implement share buttons with counters

**Estimated Hours**: 8"

create_consolidated_issue \
    "[SPRINT-2] Blog Enhancement Features" \
    "$body" \
    "enhancement,sprint-2,priority-medium,frontend" \
    "Sprint 2 - Content System"

# Sprint 3 Consolidations

# 1. Static Pages Bundle (Merge #34 + #35)
echo "Creating consolidated issue for Static Pages Bundle..."
body="### Description
Create all required static pages including legal documents and error pages.

### Acceptance Criteria
- [ ] Privacy Policy page with proper formatting
- [ ] Terms of Service page
- [ ] Custom 404 page with navigation
- [ ] General error page (500, etc.)
- [ ] Consistent design across all static pages

### Consolidated from:
- #34: Add Privacy Policy and Terms pages
- #35: Implement 404 and error pages

**Estimated Hours**: 4"

create_consolidated_issue \
    "[SPRINT-3] Static Pages Bundle" \
    "$body" \
    "enhancement,sprint-3,priority-high,frontend" \
    "Sprint 3 - Polish & Launch"

# 2. Technical SEO Bundle (Merge #38 + #40)
echo "Creating consolidated issue for Technical SEO Bundle..."
body="### Description
Implement technical SEO features for better search engine visibility.

### Acceptance Criteria
- [ ] Dynamic XML sitemap generation
- [ ] Organization schema markup
- [ ] Automatic sitemap submission to search engines
- [ ] Proper robots.txt configuration
- [ ] Search Console verification files

### Consolidated from:
- #38: Setup XML sitemap generation
- #40: Add schema markup for organization

**Estimated Hours**: 4"

create_consolidated_issue \
    "[SPRINT-3] Technical SEO Bundle" \
    "$body" \
    "enhancement,sprint-3,priority-high,backend" \
    "Sprint 3 - Polish & Launch"

echo "Issue consolidation script created successfully!"
echo ""
echo "IMPORTANT: This script will create new consolidated issues."
echo "After running this script, you should manually close the original issues"
echo "with a comment referencing the new consolidated issue."
echo ""
echo "To run this script: chmod +x scripts/consolidate-issues.sh && ./scripts/consolidate-issues.sh"