import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from '..';

const noop = jest.fn();

describe('Header', () => {
  it('renders the header text', () => {
    render(<Header onClose={noop} />);

    const headerText = screen.getByText(/Rooms & Guests/i);
    expect(headerText).toBeInTheDocument();
  });

  it('triggers the onClose after clicking the close button', () => {
    render(<Header onClose={noop} />);

    const onCloseButton = screen.getByRole('button');
    userEvent.click(onCloseButton);
    expect(noop).toBeCalled();
  });
});
