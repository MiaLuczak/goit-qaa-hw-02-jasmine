// Task 1
const calculateRectangleArea = require('../calculate');

describe('Calculate rectangle area', function () {
  it('Calculate rectangle area with lenght 5 and width 4', () => {
    expect(calculateRectangleArea(5, 4)).toBe(20);
  });
  it('Calculate rectangle area with lenght 3 and width 7', () => {
    expect(calculateRectangleArea(3, 7)).toBe(21);
  });
  it('Calculate rectangle area with lenght 10 and width 10', () => {
    expect(calculateRectangleArea(10, 10)).toBe(100);
  });
});
