import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/Box';
import Text from '../../../components/Text';
import { SelectedRecipeFooter } from './SelectedRecipeFooter';
import { UnselectedRecipeFooter } from './UnselectedRecipeFooter';
import { isAbleToAdd } from '../recipe';
import { RecipesListContext } from '../RecipesListContext';

const RecipeCard = ({
  extraCharge,
  headline,
  image,
  index,
  name,
  selected,
  selectionLimit,
  yields,
}) => {
  const { numOfSelectedRecipes, data } = useContext(RecipesListContext);
  const minRecipesSelected = numOfSelectedRecipes >= data.min;
  const maxRecipesSelected =
    numOfSelectedRecipes === data.max || !isAbleToAdd({ selectionLimit, selected });

  return (
    <Box
      borderWidth={selected ? 'md' : null}
      borderStyle={selected ? 'solid' : null}
      borderColor={selected ? 'primary_600' : null}
      m={selected ? '-2px' : null}
      borderRadius="md"
      boxShadow="lg"
      data-testid={`recipe-card-${index}`}>
      <Box borderRadius="2px 2px 0px 0px" paddingBottom="56.25%" overflow="hidden" height="0">
        <img src={image} alt={name} width="100%" />
      </Box>

      <Box p="xs" height="120px">
        <Text fontWeight="bold" fontFamily="primary" fontSize="md">
          {name}
        </Text>
        <Text fontWeight="regular" fontFamily="secondary" fontSize="sm">
          {headline}
        </Text>
      </Box>

      {selected ? (
        <SelectedRecipeFooter
          yields={yields}
          selected={selected}
          maxRecipesSelected={maxRecipesSelected}
          index={index}
        />
      ) : (
        <UnselectedRecipeFooter
          price={extraCharge && extraCharge}
          selected={selected}
          minRecipesSelected={minRecipesSelected}
          maxRecipesSelected={maxRecipesSelected}
          index={index}
        />
      )}
    </Box>
  );
};

RecipeCard.propTypes = {
  extraCharge: PropTypes.number,
  headline: PropTypes.string,
  index: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  selected: PropTypes.number,
  selectionLimit: PropTypes.number,
  yields: PropTypes.number,
};

export default RecipeCard;
