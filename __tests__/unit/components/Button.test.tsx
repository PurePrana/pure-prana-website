import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

// Example Button component test
// This shows the pattern for testing UI components

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
}

// Mock Button component for demonstration
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors'
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  }
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      type="button"
    >
      {children}
    </button>
  )
}

describe('Button Component', () => {
  // Test 1: Component renders without crashing
  it('renders without crashing', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  // Test 2: Props are handled correctly
  it('applies correct variant styles', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-blue-600')

    rerender(<Button variant="secondary">Secondary</Button>)
    expect(button).toHaveClass('bg-gray-200')
  })

  // Test 3: User interactions work
  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // Test 4: Disabled state works correctly
  it('prevents clicks when disabled', () => {
    const handleClick = jest.fn()
    render(
      <Button onClick={handleClick} disabled>
        Disabled Button
      </Button>
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('opacity-50')
    
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  // Test 5: Custom className is applied
  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  // Test 6: Accessibility requirements
  it('meets accessibility requirements', () => {
    render(<Button>Accessible Button</Button>)
    const button = screen.getByRole('button')
    
    // Button should be keyboard accessible
    expect(button).toHaveAttribute('type', 'button')
    
    // Button should have accessible text
    expect(button).toHaveAccessibleName('Accessible Button')
  })
})