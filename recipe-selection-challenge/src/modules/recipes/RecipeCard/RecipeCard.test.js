import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecipesListProvider, RecipesListContext } from '../RecipesListContext';
import RecipeCard from './RecipeCard';

describe('RecipeCard', () => {
  const recipe = {
    name: 'Chicken Sausage & Spinach Ravioli',
    headline: 'with Tomato & Lemon',
  };

  it('should show the add button and no increase and decrease buttons', () => {
    render(
      <RecipesListProvider>
        <RecipesListContext.Consumer>
          {({ recipes }) => <RecipeCard {...recipes[0]} index={0} selected={0} />}
        </RecipesListContext.Consumer>
      </RecipesListProvider>
    );

    expect(screen.queryByLabelText('Increase quantity')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Decrease quantity')).not.toBeInTheDocument();
  });

  it('should show the name, the headline, and the increase button', async () => {
    render(
      <RecipesListProvider>
        <RecipesListContext.Consumer>
          {({ recipes }) => <RecipeCard {...recipes[0]} index={0} />}
        </RecipesListContext.Consumer>
      </RecipesListProvider>
    );

    expect(await screen.findByText(recipe.name)).toBeInTheDocument();
    expect(await screen.findByText(recipe.headline)).toBeInTheDocument();

    userEvent.click(screen.getByLabelText('Decrease quantity'));
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByLabelText('Increase quantity')).toBeInTheDocument();
    expect(screen.getByLabelText('Increase quantity')).toBeDisabled();
  });
});
