import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecipesListProvider, RecipesListContext } from './RecipesListContext';
import PriceInfo from './PriceInfo';

describe('PriceInfo', () => {
  it('should click the tooltip button and show the price summary', async () => {
    render(
      <RecipesListProvider>
        <RecipesListContext.Consumer>
          {({ loading }) => !loading && <PriceInfo />}
        </RecipesListContext.Consumer>
      </RecipesListProvider>
    );

    userEvent.click(await screen.findByLabelText('Click to open price summary'));

    expect(await screen.findByText('Chicken Sausage & Spinach Ravioli')).toBeInTheDocument();
    expect(screen.getAllByText('$17.98')).toHaveLength(3);
    expect(screen.getByText('Gouda Vibes Burgers')).toBeInTheDocument();
    expect(screen.getByText('Figgy Balsamic Pork')).toBeInTheDocument();
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByText('$12.98')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$66.92')).toBeInTheDocument();
  });
});
