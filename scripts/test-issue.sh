#!/bin/bash

# Test runner script for specific issues
# Usage: ./scripts/test-issue.sh <issue-name>

set -e

ISSUE=$1

if [ -z "$ISSUE" ]; then
  echo "Usage: ./scripts/test-issue.sh <issue-name>"
  echo ""
  echo "Available issues:"
  echo "  - project-setup"
  echo "  - component-architecture"
  echo "  - development-tooling"
  echo "  - homepage"
  echo "  - product-display"
  echo "  - amazon-integration"
  echo "  - seo"
  echo "  - blog-infrastructure"
  echo "  - blog-search"
  echo "  - blog-features"
  echo "  - static-pages"
  echo "  - performance"
  echo "  - all"
  exit 1
fi

echo "Running tests for issue: $ISSUE"
echo "================================"

case $ISSUE in
  "project-setup")
    echo "Testing project setup and design system..."
    npm run test:unit -- __tests__/unit/design-system
    npm run test:lint
    npm run test:format
    ;;
    
  "component-architecture")
    echo "Testing component architecture..."
    npm run test:unit -- __tests__/unit/components
    ;;
    
  "development-tooling")
    echo "Testing development tooling..."
    npm run test:lint
    npm run test:format
    npm run typecheck
    ;;
    
  "homepage")
    echo "Testing homepage..."
    npm run test:integration -- __tests__/integration/pages/home
    npm run test:e2e -- __tests__/e2e/user-flows/homepage
    ;;
    
  "product-display")
    echo "Testing product display system..."
    npm run test:unit -- __tests__/unit/components/product
    npm run test:integration -- __tests__/integration/features/product
    ;;
    
  "amazon-integration")
    echo "Testing Amazon integration..."
    npm run test:integration -- __tests__/integration/features/amazon
    ;;
    
  "seo")
    echo "Testing SEO implementation..."
    npm run test:unit -- __tests__/unit/components/seo
    npm run test:e2e -- __tests__/e2e/seo
    ;;
    
  "blog-infrastructure")
    echo "Testing blog infrastructure..."
    npm run test:unit -- __tests__/unit/components/blog
    npm run test:integration -- __tests__/integration/features/blog
    ;;
    
  "blog-search")
    echo "Testing blog search..."
    npm run test:integration -- __tests__/integration/features/search
    ;;
    
  "blog-features")
    echo "Testing blog features..."
    npm run test:unit -- __tests__/unit/components/blog-features
    ;;
    
  "static-pages")
    echo "Testing static pages..."
    npm run test:e2e -- __tests__/e2e/static-pages
    ;;
    
  "performance")
    echo "Testing performance..."
    npm run build
    npm run test:e2e -- __tests__/e2e/performance
    ;;
    
  "all")
    echo "Running all tests..."
    npm run test:all
    ;;
    
  *)
    echo "Unknown issue: $ISSUE"
    exit 1
    ;;
esac

echo ""
echo "================================"
echo "Tests completed for: $ISSUE"