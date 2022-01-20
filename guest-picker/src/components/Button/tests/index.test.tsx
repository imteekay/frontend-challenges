import { render, screen } from '@testing-library/react';
import { Button } from '..';

const noop = () => {};
const text = 'Text';

describe('Button', () => {
  describe('primary variant', () => {
    it('verifies correct styles for primary button', () => {
      render(<Button onClick={noop}>{text}</Button>);

      const buttonText = screen.getByText(/Text/i);

      expect(buttonText).toBeInTheDocument();
      expect(buttonText).toHaveStyle('cursor: pointer');
      expect(buttonText).toHaveStyle('color: white');
      expect(buttonText).toHaveStyle('background-color: #0071f3');
      expect(buttonText).toHaveStyle('box-shadow: none');
    });
  });

  describe('secondary variant', () => {
    it('verifies correct styles for secondary button', () => {
      render(
        <Button variant="secondary" onClick={noop}>
          {text}
        </Button>
      );

      const buttonText = screen.getByText(/Text/i);

      expect(buttonText).toBeInTheDocument();
      expect(buttonText).toHaveStyle('cursor: pointer');
      expect(buttonText).toHaveStyle('color: #0071f3');
      expect(buttonText).toHaveStyle('background-color: #f7fbff');
      expect(buttonText).toHaveStyle(
        'box-shadow: #bfdaf9 0px 0px 0px 1px inset'
      );
    });
  });

  describe('disabled variant', () => {
    it('verifies correct styles for disabled button', () => {
      render(
        <Button variant="disabled" onClick={noop}>
          {text}
        </Button>
      );

      const buttonText = screen.getByText(/Text/i);

      expect(buttonText).toBeInTheDocument();
      expect(buttonText).toHaveStyle('cursor: not-allowed');
      expect(buttonText).toHaveStyle('color: #6a7886');
      expect(buttonText).toHaveStyle('background-color: #eff2F6');
      expect(buttonText).toHaveStyle('box-shadow: none');
    });
  });

  describe('danger variant', () => {
    it('verifies correct styles for danger button', () => {
      render(
        <Button variant="danger" onClick={noop}>
          {text}
        </Button>
      );

      const buttonText = screen.getByText(/Text/i);

      expect(buttonText).toBeInTheDocument();
      expect(buttonText).toHaveStyle('cursor: pointer');
      expect(buttonText).toHaveStyle('color: #d83b3b');
      expect(buttonText).toHaveStyle(
        'background-color: rgba(255, 255, 255, 0)'
      );
      expect(buttonText).toHaveStyle('box-shadow: none');
    });
  });

  describe('close variant', () => {
    it('verifies correct styles for close button', () => {
      render(
        <Button variant="close" onClick={noop}>
          {text}
        </Button>
      );

      const buttonText = screen.getByText(/Text/i);

      expect(buttonText).toBeInTheDocument();
      expect(buttonText).toHaveStyle('cursor: pointer');
      expect(buttonText).toHaveStyle('color: #6a7886');
      expect(buttonText).toHaveStyle(
        'background-color: rgba(255, 255, 255, 0)'
      );
      expect(buttonText).toHaveStyle('box-shadow: none');
    });
  });
});
