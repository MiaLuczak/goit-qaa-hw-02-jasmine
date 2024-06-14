# Testing functions using `Jasmine`

## Function `calculateRectangleArea`

### Desctiption

- Function is located in: [calculate.js](./calculate.js)
- Function should calculate rectangle area, from passed as arguments values: lenght and width

### Testing

- Function was tested using `Jasmine` framework
- Function passes all (3) Test Cases:

  ```
  it('Calculate rectangle area with lenght 5 and width 4', () => {
    expect(calculateRectangleArea(5, 4)).toBe(20);
  });

  it('Calculate rectangle area with lenght 3 and width 7', () => {
    expect(calculateRectangleArea(3, 7)).toBe(21);
  });

  it('Calculate rectangle area with lenght 10 and width 10', () => {
    expect(calculateRectangleArea(10, 10)).toBe(100);
  });
  ```

  That are a part of Test Suite:

  ```
  describe('Checking if this person is adult', () => {
    // Test Cases
  });
  ```

- Tests are located in [calculateSpec.js](./spec/calculateSpec.js)

## Function `isAdult`

### Description

- Function is located in: [checkAge.js](./checkAge.js)
- Function should return boolean type value (true or false) depending on that a person's age fullfill the condition to be over (or equal) 18 years old

### Testing

- Function was tested using `Jasmine` framework
- Function passes all (3) Test Cases:

  ```
    it('Is person, that age is 20, is adult?', () => {
      expect(isAdult(20)).toBe(true);
    });

    it('Is person, that age is 16, is adult?', () => {
      expect(isAdult(16)).toBe(false);
    });

    it('Is person, that age is 18, is adult?', () => {
      expect(isAdult(18)).toBe(true);
    });
  ```

  That are part of Test Suite:

  ```
  describe('Checking if this person is adult', () => {
    // Test Cases
  });
  ```

- Tests are located in [checkAgeSpec.js](./spec/checkAgeSpec.js)

## Terminal output with all tests:

```
> goit-qaa-ad-hw-02@1.0.0 test
> jasmine

Randomized with seed 53853
Started
......


6 specs, 0 failures
Finished in 0.009 seconds
```

#### The same Tasks were tested using `Playwright` framework in [goit-qaa-ad-hw-02-playwright](https://github.com/MioLuczak/goit-qaa-ad-hw-02-playwright) GitHub repository
