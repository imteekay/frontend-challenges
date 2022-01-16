import React, { createContext, useState, useEffect, useCallback } from 'react';
import useFetchBox from '../../hooks/useFetchBox';
import { calculateTotalPrice, parseRawPrice } from './price';
import { sumSelectedRecipes, isAbleToAdd } from './recipe';

export const RecipesListContext = createContext();

export const RecipesListProvider = ({ children }) => {
  const { data, loading } = useFetchBox();
  const [numOfSelectedRecipes, setNumOfSelectedRecipes] = useState(0);
  const [recipes, setRecipes] = useState([]);

  const totalPrice = parseRawPrice(loading ? 0 : calculateTotalPrice(data));
  const shippingPrice = parseRawPrice(loading ? 0 : data.shippingPrice);

  const handleAddRecipe = useCallback(
    (index) => () => {
      const updatedRecipes = [...recipes];
      const recipe = updatedRecipes[index];

      if (numOfSelectedRecipes < data.max && isAbleToAdd(recipe)) {
        recipe.selected += 1;
        setNumOfSelectedRecipes(numOfSelectedRecipes + 1);
        setRecipes(updatedRecipes);
      }
    },
    [numOfSelectedRecipes, data.max, recipes]
  );

  const handleRemoveRecipe = useCallback(
    (index) => () => {
      const updatedRecipes = [...recipes];
      const recipe = updatedRecipes[index];

      recipe.selected -= 1;
      setNumOfSelectedRecipes(numOfSelectedRecipes - 1);
      setRecipes(updatedRecipes);
    },
    [numOfSelectedRecipes, recipes]
  );

  useEffect(() => {
    const { recipes: fetchedRecipes } = data;

    if (fetchedRecipes) {
      setRecipes(fetchedRecipes);
      setNumOfSelectedRecipes(sumSelectedRecipes(fetchedRecipes));
    }
  }, [setRecipes, data]);

  const providerValue = {
    recipes,
    numOfSelectedRecipes,
    data,
    loading,
    handleAddRecipe,
    handleRemoveRecipe,
    totalPrice,
    shippingPrice,
  };

  return (
    <RecipesListContext.Provider value={providerValue}>{children}</RecipesListContext.Provider>
  );
};
