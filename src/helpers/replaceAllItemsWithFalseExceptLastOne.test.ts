import replaceAllItemsWithFalseExceptLastOne from './replaceAllItemsWithFalseExceptLastOne';

describe('replaceAllItemsWithFalseExceptLastOne', () => {
  it.each([
    [
      [true, true, true],
      [false, false, true],
    ],
    [
      [true, false, true],
      [false, false, true],
    ],
    [
      [false, false, true],
      [false, false, true],
    ],
    [
      [false, false, false],
      [false, false, false],
    ],
    [[], []],
  ])('given %s as input it should return %s', (input, expectedOutput) => {
    expect(replaceAllItemsWithFalseExceptLastOne(input)).toMatchObject(
      expectedOutput
    );
  });
});
