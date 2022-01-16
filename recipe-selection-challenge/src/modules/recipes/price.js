const currency = '$';

export const parseRawPrice = (price) => `${currency}${(price / 100).toFixed(2)}`;

export const calculateTotalRecipePrice = (baseRecipePrice, recipe) =>
  (baseRecipePrice + recipe.extraCharge) * recipe.selected;

export const calculateTotalRecipePrices = ({ baseRecipePrice, recipes }) =>
  recipes.reduce((price, recipe) => price + calculateTotalRecipePrice(baseRecipePrice, recipe), 0);

export const calculateTotalPrice = ({ baseRecipePrice, recipes, shippingPrice }) =>
  calculateTotalRecipePrices({ baseRecipePrice, recipes }) + shippingPrice;

export const getSummary = ({ baseRecipePrice, recipes }) =>
  recipes
    .filter((recipe) => recipe.selected)
    .reduce(
      (summary, recipe) => [
        ...summary,
        {
          id: recipe.id,
          name: recipe.name,
          selected: recipe.selected,
          price: parseRawPrice(calculateTotalRecipePrice(baseRecipePrice, recipe)),
        },
      ],
      []
    );
