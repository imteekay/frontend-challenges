import React, { useContext } from 'react';

import { Row, Col } from '../../components/Grid';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import RecipeCard from './RecipeCard/RecipeCard';
import PriceInfo from './PriceInfo';
import { RecipesListContext } from './RecipesListContext';

const Recipes = () => {
  const { recipes, data, loading, totalPrice } = useContext(RecipesListContext);

  if (loading) {
    return null;
  }

  return (
    <>
      <Row>
        <Col sm={6}>
          <h3>{data.headline}</h3>
        </Col>
        <Col sm={6}>
          <Flex alignItems="center" justifyContent="flex-end">
            <Box textAlign="right" mr="xs">
              <h3>{totalPrice}</h3>
            </Box>
            <PriceInfo />
          </Flex>
        </Col>
      </Row>
      <Row>
        {recipes.map((recipe, index) => (
          <Col sm={12} md={6} xl={4} key={recipe.id}>
            <Box mb="md">
              <RecipeCard
                extraCharge={recipe.extraCharge}
                headline={recipe.headline}
                image={recipe.image}
                name={recipe.name}
                selected={recipe.selected}
                selectionLimit={recipe.selectionLimit}
                yields={recipe.yields}
                index={index}
              />
            </Box>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Recipes;
