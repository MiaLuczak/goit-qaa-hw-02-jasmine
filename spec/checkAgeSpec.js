const isAdult = require('../checkAge');

describe('Checking if this person is adult', () => {
  it('Is person, that age is 20, is adult?', () => {
    expect(isAdult(20)).toBe(true);
  });
  it('Is person, that age is 16, is adult?', () => {
    expect(isAdult(16)).toBe(false);
  });
  it('Is person, that age is 18, is adult?', () => {
    expect(isAdult(18)).toBe(true);
  });
});
