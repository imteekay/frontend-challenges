import { mediaQuery } from '../mediaQuery';

describe('mediaQuery', () => {
  it('returns the correct media query for each breakpoint', () => {
    expect(mediaQuery['xs']).toEqual('@media (max-width: 576px)');
    expect(mediaQuery['sm']).toEqual('@media (min-width: 576px)');
    expect(mediaQuery['md']).toEqual('@media (min-width: 768px)');
    expect(mediaQuery['lg']).toEqual('@media (min-width: 992px)');
    expect(mediaQuery['xl']).toEqual('@media (min-width: 1200px)');
  });
});
