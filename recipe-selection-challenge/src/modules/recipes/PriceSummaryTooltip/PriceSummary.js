import React, { useContext } from 'react';
import Box from '../../../components/Box';
import Flex from '../../../components/Flex';
import Text from '../../../components/Text';
import List, { ListItem } from '../../../components/List';
import Hr from '../../../components/Hr';
import { RecipesListContext } from '../RecipesListContext';
import { getSummary } from '../price';

const PriceSummary = () => {
  const { data, totalPrice, shippingPrice } = useContext(RecipesListContext);
  const summary = getSummary(data);

  return (
    <Box width={['290px', '450px']} padding={16} data-testid="price-summary">
      <List>
        {summary.map((recipe) => (
          <ListItem key={`summary-recipe-${recipe.id}`} mb="xs">
            <Flex justifyContent="space-between">
              <Text fontSize="md" lineHeight="md">
                {recipe.name}
                {recipe.selected > 1 ? ` x ${recipe.selected}` : null}
              </Text>
              <Text fontSize="md" lineHeight="md" data-testid="recipe-price">
                {recipe.price}
              </Text>
            </Flex>
          </ListItem>
        ))}
        <ListItem key={`summary-recipe-shipping-price`} mb="xs">
          <Flex justifyContent="space-between">
            <Text fontSize="md" lineHeight="md">
              Shipping
            </Text>
            <Text fontSize="md" lineHeight="md">
              {shippingPrice}
            </Text>
          </Flex>
        </ListItem>
        <Hr />
        <ListItem>
          <Flex justifyContent="space-between">
            <Text fontSize="md" lineHeight="md" fontWeight="bold">
              Total
            </Text>
            <Text fontSize="md" lineHeight="md" fontWeight="bold">
              {totalPrice}
            </Text>
          </Flex>
        </ListItem>
      </List>
    </Box>
  );
};

export default PriceSummary;
