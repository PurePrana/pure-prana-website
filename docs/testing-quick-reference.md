# Testing Quick Reference

## Running Tests

### All Tests
```bash
npm run test:all
```

### By Type
```bash
npm run test              # All Jest tests
npm run test:unit         # Unit tests only
npm run test:integration  # Integration tests only
npm run test:e2e         # E2E tests only
```

### Watch Mode (Development)
```bash
npm run test:watch
```

### With Coverage
```bash
npm run test:coverage
```

### Test Specific Issue
```bash
./scripts/test-issue.sh homepage
./scripts/test-issue.sh product-display
./scripts/test-issue.sh blog-infrastructure
```

## Writing Tests

### File Naming Convention
- Unit tests: `ComponentName.test.tsx`
- Integration tests: `FeatureName.test.tsx`
- E2E tests: `UserFlow.test.ts`

### Test Structure
```typescript
describe('Component/Feature Name', () => {
  it('should do something specific', () => {
    // Arrange
    // Act
    // Assert
  })
})
```

### Common Testing Patterns

#### Testing a Component
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/Button'

test('renders button with text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole('button')).toHaveTextContent('Click me')
})
```

#### Testing User Interaction
```typescript
import userEvent from '@testing-library/user-event'

test('calls onClick when clicked', async () => {
  const user = userEvent.setup()
  const handleClick = jest.fn()
  
  render(<Button onClick={handleClick}>Click</Button>)
  await user.click(screen.getByRole('button'))
  
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

#### Testing API Calls
```typescript
import { mockFetch } from '@/__tests__/utils/test-utils'

test('fetches and displays data', async () => {
  mockFetch({ data: 'test' })
  
  render(<DataComponent />)
  
  await waitFor(() => {
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
```

## Debugging Tests

### VS Code
1. Set breakpoint in test file
2. Open Command Palette (Cmd+Shift+P)
3. Select "Debug: JavaScript Debug Terminal"
4. Run test command in debug terminal

### Console Debugging
```typescript
screen.debug() // Print DOM
screen.logTestingPlaygroundURL() // Get testing playground URL
```

### E2E Debugging
```bash
HEADLESS=false npm run test:e2e  # Run with browser visible
SLOWMO=100 npm run test:e2e      # Slow down actions
```

## Test Data

### Use Fixtures
```typescript
import { mockProducts } from '@/__tests__/fixtures/products'
```

### Use Test Utils
```typescript
import { generateMockProduct } from '@/__tests__/utils/test-utils'

const product = generateMockProduct({ name: 'Custom Product' })
```

## Best Practices

1. **Test user behavior, not implementation**
   ```typescript
   // Good
   expect(screen.getByRole('button')).toBeDisabled()
   
   // Avoid
   expect(button.props.disabled).toBe(true)
   ```

2. **Use semantic queries**
   ```typescript
   // Preferred order:
   getByRole > getByLabelText > getByPlaceholderText > getByText > getByTestId
   ```

3. **Wait for async operations**
   ```typescript
   await waitFor(() => {
     expect(screen.getByText('Loaded')).toBeInTheDocument()
   })
   ```

4. **Clean up after tests**
   ```typescript
   afterEach(() => {
     cleanup()
     jest.clearAllMocks()
   })
   ```

## Common Issues

### "Cannot find module" Error
- Check import paths
- Ensure Jest config has correct module mappings

### Tests Timing Out
- Increase timeout: `jest.setTimeout(10000)`
- Check for unresolved promises

### Flaky E2E Tests
- Add explicit waits: `await page.waitForSelector()`
- Use `waitForNavigation()` after clicks

### Coverage Not Meeting Threshold
- Add tests for edge cases
- Test error states
- Test conditional rendering