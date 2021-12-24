function verifyQueryParams(queryParams) {
  cy.location().should((location) => {
    expect(location.search).to.eq(queryParams);
  });
}

function clickSearchButtonWithText(text) {
  cy.get('button').contains(text).click();

  return {
    andVerifyQueryParams: verifyQueryParams,
  };
}

function selectAdultsCount() {
  const adultsBlock = 'div[data-testid="adults-count-input-block"]';

  cy.get(adultsBlock).within(() => {
    cy.contains('2');

    const adultsMinusButton = cy.get('button[data-testid="minus-button"]');

    adultsMinusButton.click();
    adultsMinusButton.should('be.disabled');
    cy.contains('1');

    const adultsPlusButton = cy
      .get('button[data-testid="plus-button"]')
      .first();

    adultsPlusButton.click();
    adultsPlusButton.click();
    adultsPlusButton.click();
    cy.contains('4');
  });
}

function selectChildrenCountAndAges() {
  const childrenBlock = 'div[data-testid="children-count-input-block"]';
  cy.get(childrenBlock).within(() => {
    cy.contains('0');

    const childrenMinusButton = cy.get('button[data-testid="minus-button"]');

    childrenMinusButton.should('be.disabled');
    cy.contains('0');

    const childrenPlusButton = cy
      .get('button[data-testid="plus-button"]')
      .first();

    childrenPlusButton.click();
    childrenPlusButton.click();
    childrenPlusButton.click();
    cy.contains('3');

    cy.contains('Child 1 age');
    cy.contains('Child 2 age');
    cy.contains('Child 3 age');

    cy.get('button[data-testid="close-button-1"]').click();
    cy.contains('Child 3 age').should('not.exist');

    cy.get('select').first().select('3');
  });
}

function verifyGuestRoomsBehavior() {
  const openOverlayButton = cy.get('button');
  openOverlayButton.click();

  clickSearchButtonWithText('Search 1 room • 2 guests').andVerifyQueryParams(
    '?guestRooms=2'
  );

  const firstRoom = 'div[data-testid="room-key-0"]';

  cy.get(firstRoom).within(() => {
    selectAdultsCount();
    selectChildrenCountAndAges();
  });

  clickSearchButtonWithText('Search 1 room • 6 guests').andVerifyQueryParams(
    '?guestRooms=4:3,8'
  );

  cy.contains('Room 2').should('not.exist');
  cy.get('button').contains('+ Add room').click();
  cy.contains('Room 2');

  const secondRoom = 'div[data-testid="room-key-1"]';

  cy.get(secondRoom).within(() => {
    selectAdultsCount();
    selectChildrenCountAndAges();
  });

  clickSearchButtonWithText('Search 2 rooms • 12 guests').andVerifyQueryParams(
    '?guestRooms=4:3,8|4:3,8'
  );

  cy.get('button').contains('Remove room').click();
  cy.contains('Room 2').should('not.exist');

  clickSearchButtonWithText('Search 1 room • 6 guests').andVerifyQueryParams(
    '?guestRooms=4:3,8'
  );
}

describe('GuestRoomsOverlay', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('on iPhone X', () => {
    it('verifies guest rooms overlay behavior', () => {
      cy.viewport('iphone-x');
      verifyGuestRoomsBehavior();
    });
  });

  describe('on desktop', () => {
    it('verifies guest rooms overlay behavior', () => {
      verifyGuestRoomsBehavior();
    });
  });
});
