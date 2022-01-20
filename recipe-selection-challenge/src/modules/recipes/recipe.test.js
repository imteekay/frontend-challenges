import { isAbleToAdd, sumSelectedRecipes } from './recipe';

describe('isAbleToAdd', () => {
  describe('when recipe has no limit', () => {
    it('should return true', () => {
      expect(isAbleToAdd({ selectionLimit: null, selected: 1 })).toBeTruthy();
    });
  });

  describe('when recipe has a limit but did not reach it yet', () => {
    it('should return true', () => {
      expect(isAbleToAdd({ selectionLimit: 2, selected: 1 })).toBeTruthy();
    });
  });

  describe('when recipe has a limit and reach it', () => {
    it('should return true', () => {
      expect(isAbleToAdd({ selectionLimit: 1, selected: 1 })).toBeFalsy();
    });
  });
});

describe('sumSelectedRecipes', () => {
  it('should return the count of all selected recipes', () => {
    expect(
      sumSelectedRecipes([{ selected: 1 }, { selected: 0 }, { selected: 2 }, { selected: 3 }])
    ).toEqual(6);
  });
});
