const calculateRectangleArea = require('../calculate');

describe('Calculate rectangle area', function () {
  it('Calculate rectangle area with lenght 5 and width 4', () => {
    expect(calculateRectangleArea(5, 4)).toBe(20);
  });
});
