const stringLength = require('./stringlength')

test('return the length of a string', () => {
  expect(stringLength('hello')).toBe(5)
  expect(stringLength('fiercestallion')).toBeFalsy()
  expect(stringLength('')).toBeFalsy()
});