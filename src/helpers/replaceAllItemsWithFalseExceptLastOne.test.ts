import replaceAllItemsWithFalseExceptLastOne from './replaceAllItemsWithFalseExceptLastOne';

describe('replaceAllItemsWithFalseExceptLastOne', () => {
  it('should return an empty array when the input is an empty array', () => {
    expect(replaceAllItemsWithFalseExceptLastOne([])).toHaveReturnedWith([]);
  });
});
