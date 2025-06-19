# GitHub Issue Consolidation Plan

## Overview

This document outlines the consolidation of 44 GitHub issues into 29 more manageable issues by merging related tasks that can be efficiently delivered together.

## Consolidation Summary

- **Original Issues:** 44
- **Consolidated Issues:** 29
- **Issues Merged:** 15
- **Reduction:** 33%

## Sprint 0 - Foundation

### Original Structure (9 issues)

- #1: Initialize Next.js project with TypeScript
- #2: Setup GitHub repo and Vercel deployment
- #3: Configure Tailwind CSS and design system
- #4: Create base layout components
- #5: Setup Google Analytics and tracking utilities
- #6: Create shared UI components
- #7: Setup ESLint, Prettier, and pre-commit hooks
- #8: Design mobile-first responsive grid system
- #9: Setup Storybook for component documentation

### Consolidated Structure (5 issues)

#### 1. **Project Setup & Design System** (Merges #1 + #3)

- Initialize Next.js 14 with TypeScript and App Router
- Configure Tailwind CSS with custom design tokens
- Set up theme configuration and design system
- **Estimated Hours:** 4

#### 2. **Component Architecture** (Merges #4 + #6 + #8)

- Create base layout components (Header, Footer, Layout)
- Build shared UI components library
- Design mobile-first responsive grid system
- **Estimated Hours:** 8

#### 3. **Development Tooling** (Merges #7 + #9)

- Configure ESLint and Prettier
- Set up Husky pre-commit hooks
- Configure Storybook for component documentation
- **Estimated Hours:** 5

#### 4. **Deployment Setup** (Keep #2)

- Original issue remains unchanged
- **Estimated Hours:** 2

#### 5. **Analytics Integration** (Keep #5)

- Original issue remains unchanged
- **Estimated Hours:** 3

## Sprint 1 - Core Pages

### Original Structure (11 issues)

- #10: Create homepage with hero section
- #11: Build reusable Product Card component
- #12: Create product detail page template
- #13: Implement Amazon affiliate link tracking
- #14: Add structured data for products
- #15: Optimize images with Next.js Image component
- #16: Create loading skeletons and error states
- #17: Implement smooth scroll and micro-animations
- #18: Setup Open Graph tags for social sharing
- #19: Add product image gallery with zoom
- #20: Implement price display from Amazon API

### Consolidated Structure (7 issues)

#### 1. **Homepage Development** (Keep #10)

- Original issue remains unchanged
- **Estimated Hours:** 6

#### 2. **Product Display System** (Merges #11 + #12 + #19)

- Build reusable Product Card component
- Create product detail page template
- Implement image gallery with zoom functionality
- **Estimated Hours:** 10

#### 3. **Amazon Integration** (Keep #13)

- Original issue remains unchanged
- **Estimated Hours:** 3

#### 4. **SEO Implementation** (Merges #14 + #18)

- Add structured data for products
- Setup Open Graph and Twitter Card tags
- Create reusable SEO components
- **Estimated Hours:** 4

#### 5. **Image Optimization** (Keep #15)

- Original issue remains unchanged
- **Estimated Hours:** 3

#### 6. **UX Enhancements** (Keep #16)

- Original issue remains unchanged
- **Estimated Hours:** 2

#### 7. **Animations** (Keep #17)

- Original issue remains unchanged
- **Estimated Hours:** 3

#### 8. **Amazon API Integration** (Keep #20)

- Original issue remains unchanged
- **Estimated Hours:** 4

## Sprint 2 - Content System

### Original Structure (11 issues)

- #21: Setup MDX blog infrastructure
- #22: Create blog listing page with pagination
- #23: Build blog post template with TOC
- #24: Implement blog search functionality
- #25: Create 'How Ayurveda Works' cornerstone content
- #26: Add reading time and author info
- #27: Implement related posts feature
- #28: Create blog category pages
- #29: Setup RSS feed generation
- #30: Add blog post reactions/likes
- #31: Implement share buttons with counters

### Consolidated Structure (7 issues)

#### 1. **Blog Core Infrastructure** (Merges #21 + #22 + #23)

- Setup MDX with custom components
- Create blog listing with pagination
- Build blog post template with TOC
- **Estimated Hours:** 10

#### 2. **Blog Search** (Keep #24)

- Original issue remains unchanged
- **Estimated Hours:** 3

#### 3. **Cornerstone Content** (Keep #25)

- Original issue remains unchanged
- **Estimated Hours:** 3

#### 4. **Blog Enhancement Features** (Merges #26 + #27 + #30 + #31)

- Add reading time and author info
- Implement related posts algorithm
- Add reaction/like system
- Implement social share buttons
- **Estimated Hours:** 8

#### 5. **Category Pages** (Keep #28)

- Original issue remains unchanged
- **Estimated Hours:** 3

#### 6. **RSS Feed** (Keep #29)

- Original issue remains unchanged
- **Estimated Hours:** 2

## Sprint 3 - Polish & Launch

### Original Structure (13 issues)

- #32: Create About Us page with brand story
- #33: Build Contact page with form
- #34: Add Privacy Policy and Terms pages
- #35: Implement 404 and error pages
- #36: Performance audit and optimization
- #37: Cross-browser and device testing
- #38: Setup XML sitemap generation
- #39: Implement cookie consent banner
- #40: Add schema markup for organization
- #41: Configure security headers
- #42: Add newsletter signup with ConvertKit
- #43: Implement testimonials section
- #44: Create simple admin dashboard

### Consolidated Structure (10 issues)

#### 1. **About Us Page** (Keep #32)

- Original issue remains unchanged
- **Estimated Hours:** 4

#### 2. **Contact Page** (Keep #33)

- Original issue remains unchanged
- **Estimated Hours:** 3

#### 3. **Static Pages Bundle** (Merges #34 + #35)

- Create Privacy Policy and Terms pages
- Implement 404 and error pages
- **Estimated Hours:** 4

#### 4. **Performance Optimization** (Keep #36)

- Original issue remains unchanged
- **Estimated Hours:** 4

#### 5. **Testing** (Keep #37)

- Original issue remains unchanged
- **Estimated Hours:** 4

#### 6. **Technical SEO Bundle** (Merges #38 + #40)

- Setup XML sitemap generation
- Add organization schema markup
- **Estimated Hours:** 4

#### 7. **Cookie Consent** (Keep #39)

- Original issue remains unchanged
- **Estimated Hours:** 3

#### 8. **Security Headers** (Keep #41)

- Original issue remains unchanged
- **Estimated Hours:** 2

#### 9. **Newsletter Integration** (Keep #42)

- Original issue remains unchanged
- **Estimated Hours:** 4

#### 10. **Testimonials** (Keep #43)

- Original issue remains unchanged
- **Estimated Hours:** 3

#### 11. **Admin Dashboard** (Keep #44)

- Original issue remains unchanged
- **Estimated Hours:** 6

## Implementation Steps

1. **Review the consolidation plan** with stakeholders
2. **Create new consolidated issues** with detailed descriptions
3. **Close original issues** with references to new consolidated issues
4. **Update project board** with new issue structure
5. **Adjust sprint planning** based on new estimates

## Benefits of Consolidation

1. **Reduced Context Switching**: Developers can work on related features together
2. **Better Code Reuse**: Shared components and logic can be built once
3. **Faster Delivery**: Related features can be tested and deployed together
4. **Clearer Dependencies**: Consolidated issues show natural groupings
5. **Simplified Project Management**: Fewer issues to track and update

## Notes

- All time estimates are preserved or adjusted based on combined scope
- Priority levels are maintained at the highest level of merged issues
- Labels are combined to reflect all aspects of consolidated work
- Milestones remain unchanged to maintain sprint structure
