const Calculator = require('./calculator')
const calculator = new Calculator

describe('Calculator', () => {
  test('add two number', () => {
    expect(calculator.add(1, 2)).toBe(3)
    expect(calculator.add(10, 2)).toBe(12)
  });
  test('subtract two number', () => {
    expect(calculator.subtract(2, 1)).toBe(1)
    expect(calculator.subtract(20, 10)).toBe(10)
  })
  test('multiply two numbers', () => {
    expect(calculator.multiply(2, 1)).toBe(2)
    expect(calculator.multiply(5, 2)).toBe(10)
  })
  test('divide two number', () => {
    expect(calculator.divide(10, 2)).toBe(5)
    expect(calculator.divide(2, 2)).toBe(1)
  })
})