import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Flex from '../../../components/Flex';
import Box from '../../../components/Box';
import Text from '../../../components/Text';
import IconMinusCircle from '../../../icons/IconMinusCircle';
import IconPlusCircle from '../../../icons/IconPlusCircle';
import { RecipesListContext } from '../RecipesListContext';
import { SelectionButton } from './SelectionButton';

export const SelectedRecipeFooter = ({ selected, yields, maxRecipesSelected, index }) => {
  const { handleAddRecipe, handleRemoveRecipe } = useContext(RecipesListContext);

  return (
    <Flex backgroundColor="primary_600" justifyContent="space-between" alignItems="center">
      <SelectionButton onClick={handleRemoveRecipe(index)} aria-label="Decrease quantity">
        <IconMinusCircle />
      </SelectionButton>
      <Box color="white">
        <Text textAlign="center" fontWeight="bold" fontFamily="secondary" fontSize="md">
          {selected} in your box
        </Text>
        <Text textAlign="center" fontFamily="secondary" fontSize="sm">
          ({selected * yields} servings)
        </Text>
      </Box>
      <SelectionButton
        onClick={handleAddRecipe(index)}
        aria-label="Increase quantity"
        disabled={maxRecipesSelected}>
        <IconPlusCircle />
      </SelectionButton>
    </Flex>
  );
};

SelectedRecipeFooter.propTypes = {
  selected: PropTypes.number,
  yields: PropTypes.number,
  maxRecipesSelected: PropTypes.bool,
  index: PropTypes.number,
};
