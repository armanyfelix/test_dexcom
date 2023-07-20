const { containsDuplicateSet, containsDuplicateSort } = require('../src/ContainsDuplicate');

test('(Set) Example 1:', () => {
  expect(containsDuplicateSet([1,2,3,1])).toBe(true);
});

test('(Set) Example 2:', () => {
  expect(containsDuplicateSet([1,2,3,4])).toBe(false);
});

test('(Set) Example 3:', () => {
  expect(containsDuplicateSet([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});

test('(Sort) Example 1:', () => {
  expect(containsDuplicateSort([1,2,3,1])).toBe(true);
});

test('(Sort) EExample 2:', () => {
  expect(containsDuplicateSort([1,2,3,4])).toBe(false);
});

test('(Sort) EExample 3:', () => {
  expect(containsDuplicateSort([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});