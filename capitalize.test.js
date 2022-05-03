const capitalize = require('./capitalize')

test('capitalize a string', () => {
  expect(capitalize('hello')).toBe('HELLO')
  expect(capitalize('pinky')).toBe('PINKY')
})