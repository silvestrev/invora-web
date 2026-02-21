import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PrimaryButton } from '../PrimaryButton';

describe('PrimaryButton', () => {
  const setup = () => {
    const renderResult = render(<PrimaryButton>Click me</PrimaryButton>);
    return renderResult;
  };

  it('should render the children text', () => {
    const { getByRole } = setup();
    expect(getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('should default to type="submit"', () => {
    const { getByRole } = setup();
    expect(getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('should apply type="button" when provided', () => {
    const { getByRole } = render(<PrimaryButton type="button">Click me</PrimaryButton>);
    expect(getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should merge extra className without removing base classes', () => {
    const { getByRole } = render(
      <PrimaryButton className="mt-4">Click me</PrimaryButton>,
    );
    const button = getByRole('button');
    expect(button).toHaveClass('mt-4');
    expect(button).toHaveClass('w-full');
  });

  it('should render a complex React node as children', () => {
    const { getByText } = render(
      <PrimaryButton>
        <span>Icon</span>
      </PrimaryButton>,
    );
    expect(getByText('Icon')).toBeInTheDocument();
  });
});
