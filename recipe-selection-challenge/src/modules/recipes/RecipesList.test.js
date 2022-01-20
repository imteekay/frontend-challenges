import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RecipesList from './RecipesList';
import { RecipesListProvider } from './RecipesListContext';

function run(times, fn) {
  for (let step = 0; step < times; step++) {
    fn();
  }
}

describe('RecipesList', () => {
  it('should be able to add and remove recipes and check the price summary', async () => {
    render(
      <RecipesListProvider>
        <RecipesList />
      </RecipesListProvider>
    );

    expect(await screen.findByText('$66.92')).toBeInTheDocument();

    const firstRecipeCard = await screen.findByTestId('recipe-card-0');
    const withinFirstRecipeCard = within(firstRecipeCard);

    expect(withinFirstRecipeCard.getByLabelText('Increase quantity')).toBeDisabled();
    expect(withinFirstRecipeCard.queryByRole('button', { name: 'Add' })).not.toBeInTheDocument();

    const decreaseRecipeButton = withinFirstRecipeCard.getByLabelText('Decrease quantity');
    userEvent.click(decreaseRecipeButton);

    expect(withinFirstRecipeCard.queryByLabelText('Increase quantity')).not.toBeInTheDocument();
    expect(withinFirstRecipeCard.getByRole('button', { name: 'Add' })).toBeInTheDocument();

    expect(screen.queryByText('$66.92')).not.toBeInTheDocument();
    expect(screen.getByText('$48.94')).toBeInTheDocument();

    const fourthRecipeCard = await screen.findByTestId('recipe-card-3');
    const withinFourthRecipeCard = within(fourthRecipeCard);

    userEvent.click(withinFourthRecipeCard.getByRole('button', { name: 'Add' }));
    expect(screen.getByText('$66.92')).toBeInTheDocument();
    expect(withinFourthRecipeCard.getByLabelText('Increase quantity')).not.toBeDisabled();

    run(6, () => userEvent.click(withinFourthRecipeCard.getByLabelText('Increase quantity')));
    expect(withinFourthRecipeCard.getByLabelText('Increase quantity')).toBeDisabled();

    expect(screen.getByText('$156.82')).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('Click to open price summary'));

    const priceSummaryTooltip = await screen.findByTestId('price-summary');
    const withinPriceSummaryTooltip = within(priceSummaryTooltip);

    expect(withinPriceSummaryTooltip.getByText('Gouda Vibes Burgers')).toBeInTheDocument();
    expect(withinPriceSummaryTooltip.getByText('Figgy Balsamic Pork')).toBeInTheDocument();
    expect(
      withinPriceSummaryTooltip.getByText('Sweet Soy Glazed Steak Tacos x 6')
    ).toBeInTheDocument();

    expect(withinPriceSummaryTooltip.getAllByText('$17.98')).toHaveLength(2);
    expect(withinPriceSummaryTooltip.getByText('$107.88')).toBeInTheDocument();

    expect(withinPriceSummaryTooltip.getByText('Shipping')).toBeInTheDocument();
    expect(withinPriceSummaryTooltip.getByText('$12.98')).toBeInTheDocument();

    expect(withinPriceSummaryTooltip.getByText('Total')).toBeInTheDocument();
    expect(withinPriceSummaryTooltip.getByText('$156.82')).toBeInTheDocument();
  });
});
