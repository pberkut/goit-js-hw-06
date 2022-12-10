// Variant 1. Declarative code.
const categoriesRef = document.querySelector('#categories');
const arrItemRef = document.querySelectorAll('.item');

const numberOfCategories = categoriesRef.children.length;
console.log('Number of categories:', numberOfCategories);

arrItemRef.forEach(itemRef => {
  const categoriesNameRef = itemRef.querySelector('.item > h2');
  const elementsCategoriesRef = itemRef.querySelector('.item > ul');
  const categoriesName = categoriesNameRef.textContent;
  const numbersElements = elementsCategoriesRef.children.length;

  console.log(`\nCategory: ${categoriesName}`);
  console.log('Elements: ', numbersElements);
});

// Variant 2. Imperative code.
/*
const categoriesRef = document.querySelector('#categories');

const numberOfCategories = categoriesRef.childElementCount;

console.log('Number of categories:', numberOfCategories);

for (const child of categoriesRef.children) {
  const categoriesNameRef = child.querySelector('.item > h2');
  const elementsCategoriesRef = child.querySelector('.item > ul');
  const categoriesName = categoriesNameRef.textContent;
  const numbersElements = elementsCategoriesRef.children.length;

  console.log(`\nCategory: ${categoriesName}`);
  console.log('Elements: ', numbersElements);
}
*/
