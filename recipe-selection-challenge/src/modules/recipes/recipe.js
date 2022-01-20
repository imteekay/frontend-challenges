export const isAbleToAdd = (recipe) =>
  recipe.selectionLimit === null || recipe.selected < recipe.selectionLimit;

export const sumSelectedRecipes = (recipes) =>
  recipes.reduce((numOfSelectedRecipes, recipe) => numOfSelectedRecipes + recipe.selected, 0);
