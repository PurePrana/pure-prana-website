# Pure Prana Website Testing Strategy

## Overview

This document outlines a practical and simple testing approach for the Pure Prana website. The strategy focuses on ensuring features work correctly without over-engineering the testing infrastructure.

## Testing Philosophy

- **Keep it Simple**: Focus on testing what matters - user flows and business logic
- **Practical Over Perfect**: Better to have basic tests that run than complex tests that don't
- **Issue-Driven Testing**: Each consolidated issue should have corresponding tests
- **Progressive Enhancement**: Start with critical paths, expand coverage over time

## Testing Types

### 1. Unit Tests (Jest + React Testing Library)

- Test individual components in isolation
- Focus on component behavior and user interactions
- Mock external dependencies

### 2. Integration Tests (Jest + React Testing Library)

- Test component interactions
- Test data flow between components
- Test API integration points

### 3. E2E Tests (Puppeteer)

- Test critical user journeys
- Test full page flows
- Validate production-like behavior

## Test Structure

```
/Users/shivamdixit/workspace/pure-prana-website/
├── __tests__/
│   ├── unit/
│   │   ├── components/
│   │   └── lib/
│   ├── integration/
│   │   ├── pages/
│   │   └── features/
│   └── e2e/
│       ├── user-flows/
│       └── smoke-tests/
├── jest.config.js
├── jest.setup.js
└── puppeteer.config.js
```

## Test Coverage by Sprint

### Sprint 0 - Foundation Tests

#### Issue: Project Setup & Design System

```bash
npm run test:unit -- __tests__/unit/design-system
```

- Test theme provider functionality
- Test CSS variable injection
- Test responsive utilities

#### Issue: Component Architecture

```bash
npm run test:unit -- __tests__/unit/components/layout
```

- Test Header component rendering
- Test Footer component rendering
- Test responsive grid behavior
- Test mobile menu functionality

#### Issue: Development Tooling

```bash
npm run test:lint
npm run test:format
```

- Validate ESLint configuration
- Validate Prettier formatting
- Test pre-commit hooks

### Sprint 1 - Core Pages Tests

#### Issue: Homepage Development

```bash
npm run test:integration -- __tests__/integration/pages/home
npm run test:e2e -- __tests__/e2e/user-flows/homepage
```

- Test hero section rendering
- Test CTA interactions
- Test page performance metrics

#### Issue: Product Display System

```bash
npm run test:unit -- __tests__/unit/components/product
npm run test:integration -- __tests__/integration/features/product-display
```

- Test Product Card component
- Test product detail page
- Test image gallery functionality
- Test zoom feature

#### Issue: Amazon Integration

```bash
npm run test:integration -- __tests__/integration/features/amazon
```

- Test affiliate link generation
- Test click tracking
- Test link validation

#### Issue: SEO Implementation

```bash
npm run test:unit -- __tests__/unit/components/seo
```

- Test meta tag generation
- Test structured data output
- Test Open Graph tags

### Sprint 2 - Content System Tests

#### Issue: Blog Core Infrastructure

```bash
npm run test:unit -- __tests__/unit/components/blog
npm run test:integration -- __tests__/integration/features/blog
```

- Test MDX rendering
- Test blog listing pagination
- Test TOC generation

#### Issue: Blog Search

```bash
npm run test:integration -- __tests__/integration/features/search
```

- Test search functionality
- Test search results accuracy
- Test search performance

#### Issue: Blog Enhancement Features

```bash
npm run test:unit -- __tests__/unit/components/blog-features
```

- Test reading time calculation
- Test related posts algorithm
- Test share button functionality
- Test reaction system

### Sprint 3 - Polish & Launch Tests

#### Issue: Static Pages Bundle

```bash
npm run test:e2e -- __tests__/e2e/smoke-tests/static-pages
```

- Test 404 page
- Test error boundary
- Test legal pages rendering

#### Issue: Performance Optimization

```bash
npm run test:performance
```

- Test page load times
- Test bundle sizes
- Test image optimization

#### Issue: Technical SEO Bundle

```bash
npm run test:seo
```

- Test sitemap generation
- Test robots.txt
- Test schema markup

## Test Scripts

Add to package.json:

```json
{
  "scripts": {
    "test": "jest",
    "test:unit": "jest --testPathPattern=__tests__/unit",
    "test:integration": "jest --testPathPattern=__tests__/integration",
    "test:e2e": "jest --testPathPattern=__tests__/e2e --config=jest.e2e.config.js",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "test:format": "prettier --check .",
    "test:performance": "lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json",
    "test:seo": "node scripts/test-seo.js",
    "test:all": "npm run test:lint && npm run test:format && npm run test && npm run test:e2e"
  }
}
```

## Simple Test Examples

### Unit Test Pattern

```typescript
// Always test:
// 1. Component renders without crashing
// 2. Props are handled correctly
// 3. User interactions work
// 4. Accessibility requirements are met
```

### Integration Test Pattern

```typescript
// Always test:
// 1. Components work together
// 2. Data flows correctly
// 3. API calls are made
// 4. Error states are handled
```

### E2E Test Pattern

```typescript
// Always test:
// 1. User can complete the journey
// 2. Page loads successfully
// 3. Critical elements are visible
// 4. Forms submit correctly
```

## CI/CD Integration

### GitHub Actions Workflow

```yaml
name: Test Suite
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:lint
      - run: npm run test:format
      - run: npm run test
      - run: npm run test:e2e
```

## Testing Checklist for Each Issue

Before marking an issue as complete:

- [ ] Unit tests written for new components
- [ ] Integration tests written for feature flows
- [ ] E2E test written for user journey (if applicable)
- [ ] All tests passing locally
- [ ] Tests run in CI/CD pipeline
- [ ] No console errors or warnings
- [ ] Accessibility tests passing
- [ ] Performance budget met

## Common Test Utilities

### Test Data Factories

Create reusable test data in `__tests__/fixtures/`

### Custom Render Functions

Create custom render functions in `__tests__/utils/`

### Mock Providers

Create mock providers for context/theme in `__tests__/mocks/`

## Debugging Tests

### Local Debugging

```bash
# Run specific test file
npm test -- Button.test.tsx

# Run tests in watch mode
npm run test:watch

# Debug in VS Code
# Add breakpoint and use "Debug Jest Tests" launch config
```

### E2E Debugging

```bash
# Run Puppeteer in headful mode
HEADLESS=false npm run test:e2e

# Take screenshots on failure
PUPPETEER_SCREENSHOTS=true npm run test:e2e
```

## Best Practices

1. **Test Behavior, Not Implementation**

   - Focus on what users see and do
   - Don't test internal state or methods

2. **Keep Tests Simple**

   - One concept per test
   - Clear test names that describe the scenario

3. **Use Realistic Data**

   - Avoid "test1", "test2" naming
   - Use data that resembles production

4. **Test Accessibility**

   - Include keyboard navigation tests
   - Test with screen reader announcements

5. **Maintain Test Performance**
   - Mock heavy operations
   - Use test utilities to reduce boilerplate

## Conclusion

This testing strategy provides a practical approach to ensuring the Pure Prana website works correctly without over-complicating the development process. Start with critical paths and expand coverage as the project grows.
