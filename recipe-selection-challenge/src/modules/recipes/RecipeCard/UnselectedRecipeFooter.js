import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Flex from '../../../components/Flex';
import Box from '../../../components/Box';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import { RecipesListContext } from '../RecipesListContext';
import { parseRawPrice } from '../price';

export const UnselectedRecipeFooter = ({
  price,
  maxRecipesSelected,
  minRecipesSelected,
  index,
}) => {
  const { handleAddRecipe } = useContext(RecipesListContext);

  return (
    <Flex p="xs">
      <Box flex="50%" alignSelf="center">
        {price ? <Text color="primary_600">+{parseRawPrice(price)}</Text> : null}
      </Box>
      <Box flex="50%">
        <Button
          onClick={handleAddRecipe(index)}
          variant="secondary"
          width="100%"
          p="0"
          disabled={maxRecipesSelected}>
          {minRecipesSelected ? 'Add extra meal' : 'Add'}
        </Button>
      </Box>
    </Flex>
  );
};

UnselectedRecipeFooter.propTypes = {
  price: PropTypes.number,
  minRecipesSelected: PropTypes.bool,
  maxRecipesSelected: PropTypes.bool,
  index: PropTypes.number,
};
