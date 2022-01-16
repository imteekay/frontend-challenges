import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecipesListProvider, RecipesListContext } from '../RecipesListContext';
import PriceSummary from './PriceSummary';

describe('PriceSummary', () => {
  it('should show all the selected recipes and their prices, the shipping price, and the total price', async () => {
    render(
      <RecipesListProvider>
        <RecipesListContext.Consumer>
          {({ loading }) => !loading && <PriceSummary />}
        </RecipesListContext.Consumer>
      </RecipesListProvider>
    );

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
