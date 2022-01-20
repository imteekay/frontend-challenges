import {
  parseRawPrice,
  calculateTotalRecipePrice,
  calculateTotalRecipePrices,
  calculateTotalPrice,
} from './price';

describe('price', () => {
  describe('parseRawPrice', () => {
    it('should return the raw price with the currency symbol and converted to decimals', () => {
      const price = 1000;
      const parsedPrice = parseRawPrice(price);

      expect(parsedPrice).toBe('$10.00');
    });
  });

  describe('calculateTotalRecipePrice', () => {
    describe('for a selected recipe', () => {
      it('should return the total price of the recipe', () => {
        const totalRecipePrice = calculateTotalRecipePrice(1000, {
          extraCharge: 1000,
          selected: 2,
        });

        expect(totalRecipePrice).toBe(4000);
      });
    });

    describe('for a non-selected recipe', () => {
      it('should return 0', () => {
        const totalRecipePrice = calculateTotalRecipePrice(1000, {
          extraCharge: 1000,
          selected: 0,
        });

        expect(totalRecipePrice).toBe(0);
      });
    });
  });

  describe('calculateTotalRecipePrices', () => {
    it('should return the total price of all recipes', () => {
      const totalRecipePrices = calculateTotalRecipePrices({
        baseRecipePrice: 1000,
        recipes: [
          {
            extraCharge: 1000,
            selected: 2,
          },
          {
            extraCharge: 3000,
            selected: 0,
          },
          {
            extraCharge: 2000,
            selected: 1,
          },
        ],
      });

      expect(totalRecipePrices).toBe(7000);
    });
  });

  describe('calculateTotalPrice', () => {
    it('should return the total price', () => {
      const totalRecipePrices = calculateTotalPrice({
        baseRecipePrice: 1000,
        recipes: [
          {
            extraCharge: 1000,
            selected: 2,
          },
          {
            extraCharge: 3000,
            selected: 0,
          },
          {
            extraCharge: 2000,
            selected: 1,
          },
        ],
        shippingPrice: 3000,
      });

      expect(totalRecipePrices).toBe(10000);
    });
  });
});
