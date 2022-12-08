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
