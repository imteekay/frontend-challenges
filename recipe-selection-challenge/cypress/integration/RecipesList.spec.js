describe('Recipes list and price summary', () => {
  it('adds and remove recipes and checks if price calculation', () => {
    // Visits page and check the total price
    cy.visit('/');
    cy.contains('$66.92').should('exist');

    // Click the price summary tooltip to open it
    cy.get('button[aria-label="Click to open price summary"]').click();

    // Verify the price summary
    cy.get('div[data-testid="price-summary"]').within(() => {
      cy.contains('Chicken Sausage & Spinach Ravioli').should('exist');
      cy.contains('Gouda Vibes Burgers').should('exist');
      cy.contains('Figgy Balsamic Pork').should('exist');
      cy.get('div[data-testid="recipe-price"]').should(($recipePrice) => {
        expect($recipePrice).to.have.length(3);
      });

      cy.contains('Shipping').should('exist');
      cy.contains('$12.98').should('exist');

      cy.contains('Total').should('exist');
      cy.contains('$66.92').should('exist');
    });

    // Increase Figgy Balsamic Pork recipe from 1 to 3
    cy.get('div[data-testid="recipe-card-2"]').within(() => {
      cy.contains('1 in your box').should('exist');
      cy.get('button[aria-label="Increase quantity"]').click();

      cy.contains('2 in your box').should('exist');
      cy.get('button[aria-label="Increase quantity"]').click();

      cy.contains('3 in your box').should('exist');
    });

    // Add the Sweet Soy Glazed Steak Tacos recipe
    cy.get('div[data-testid="recipe-card-3"]').within(() => {
      cy.get('button').contains('Add extra meal').click();
      cy.contains('1 in your box').should('exist');
    });

    // Add two Pork Sausage & Roasted Pepper Pasta recipes and verify if the increase button is disabled
    cy.get('div[data-testid="recipe-card-4"]').within(() => {
      cy.get('button').contains('Add extra meal').click();
      cy.contains('1 in your box').should('exist');
      cy.get('button[aria-label="Increase quantity"]').click();
      cy.get('button[aria-label="Increase quantity"]').should('be.disabled');
    });

    // Check the total price
    cy.contains('$156.82').should('exist');

    // Click the price summary tooltip to open it
    cy.get('button[aria-label="Click to open price summary"]').click();

    // Verify the price summary
    cy.get('div[data-testid="price-summary"]').within(() => {
      cy.contains('Chicken Sausage & Spinach Ravioli').should('exist');
      cy.contains('Gouda Vibes Burgers').should('exist');
      cy.contains('Figgy Balsamic Pork').should('exist');
      cy.contains('Sweet Soy Glazed Steak Tacos').should('exist');
      cy.contains('Pork Sausage & Roasted Pepper Pasta').should('exist');

      cy.get('div[data-testid="recipe-price"]').should(($recipePrice) => {
        expect($recipePrice).to.have.length(5);
      });

      cy.contains('Shipping').should('exist');
      cy.contains('$12.98').should('exist');

      cy.contains('Total').should('exist');
      cy.contains('$156.82').should('exist');
    });
  });

  it('should be accessible', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });
});
