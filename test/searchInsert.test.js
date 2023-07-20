const { binarySearchInsert, linearSearchInsert } = require('../src/SearchInsert');

test('(Binary) Example 1:', () => {
  expect(binarySearchInsert([1,3,5,6], 5)).toBe(2);
});

test('(Binary) Example 2:', () => {
  expect(binarySearchInsert([1,3,5,6], 2)).toBe(1);
});

test('(Binary) Example 3:', () => {
  expect(binarySearchInsert([1,3,5,6], 7)).toBe(4);
});

test('(Linear) Example 1:', () => {
  expect(linearSearchInsert([1,3,5,6], 5)).toBe(2);
});

test('(Linear) Example 2:', () => {
  expect(linearSearchInsert([1,3,5,6], 2)).toBe(1);
});

test('(Linear) Example 3:', () => {
  expect(linearSearchInsert([1,3,5,6], 7)).toBe(4);
});