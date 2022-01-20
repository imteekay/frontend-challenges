import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecipesListProvider, RecipesListContext } from '../RecipesListContext';
import { UnselectedRecipeFooter } from './UnselectedRecipeFooter';
import { isAbleToAdd } from '../recipe';

describe('UnselectedRecipeFooter', () => {
  it('should show and able to click the "Add extra meal" button', async () => {
    render(
      <RecipesListProvider>
        <RecipesListContext.Consumer>
          {({ recipes, loading, data, numOfSelectedRecipes }) => {
            const recipe = recipes[3];
            return (
              !loading && (
                <UnselectedRecipeFooter
                  selected={recipe.selected}
                  yields={recipe.yields}
                  maxRecipesSelected={
                    numOfSelectedRecipes === data.max ||
                    !isAbleToAdd({
                      selectionLimit: recipe.selectionLimit,
                      selected: recipe.selected,
                    })
                  }
                  minRecipesSelected={numOfSelectedRecipes >= data.min}
                  index={0}
                />
              )
            );
          }}
        </RecipesListContext.Consumer>
      </RecipesListProvider>
    );

    userEvent.click(await screen.findByText('Add extra meal'));
  });
});
