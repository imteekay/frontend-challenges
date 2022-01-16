import React from 'react';
import { render, screen } from '@testing-library/react';
import { SelectionButton } from './SelectionButton';

describe('SelectionButton', () => {
  const text = 'button text';

  it('should render the button with the correct text', () => {
    render(<SelectionButton>{text}</SelectionButton>);
    expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
  });

  it('should render a disabled button', () => {
    render(<SelectionButton disabled={true}>{text}</SelectionButton>);
    expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: text })).toBeDisabled();
  });
});
