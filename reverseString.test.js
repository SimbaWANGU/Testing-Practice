const reverseString = require('./reverseString')

test('should return reverse of string', () => {
  expect(reverseString('hello')).toBe('olleh')
  expect(reverseString('mustard')).toBe('dratsum')
})