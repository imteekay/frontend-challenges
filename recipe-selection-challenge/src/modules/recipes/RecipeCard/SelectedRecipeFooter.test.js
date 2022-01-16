import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecipesListProvider, RecipesListContext } from '../RecipesListContext';
import { SelectedRecipeFooter } from './SelectedRecipeFooter';
import { isAbleToAdd } from '../recipe';

describe('SelectedRecipeFooter', () => {
  it('should show "1 in your box" text, decrease the quantity, and should not show the text anymore', async () => {
    render(
      <RecipesListProvider>
        <RecipesListContext.Consumer>
          {({ recipes, loading, data, numOfSelectedRecipes }) => {
            const recipe = recipes[0];
            return (
              !loading && (
                <SelectedRecipeFooter
                  selected={recipe.selected}
                  yields={recipe.yields}
                  maxRecipesSelected={
                    numOfSelectedRecipes === data.max ||
                    !isAbleToAdd({
                      selectionLimit: recipe.selectionLimit,
                      selected: recipe.selected,
                    })
                  }
                  index={0}
                />
              )
            );
          }}
        </RecipesListContext.Consumer>
      </RecipesListProvider>
    );

    expect(await screen.findByText('1 in your box')).toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Decrease quantity'));
    expect(screen.queryByText('1 in your box')).not.toBeInTheDocument();
  });
});
