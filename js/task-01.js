const categoriesEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);

    const listOfELements = category.lastElementChild;
    const elementsOfCategory = listOfELements.children;

    console.log(elementsOfCategory.length);
});

