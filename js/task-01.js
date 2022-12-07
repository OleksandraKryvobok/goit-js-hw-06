const categoriesEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(Category => {
    console.log(`Category: ${Category.firstElementChild.textContent}`);

    const elementOfCategory = Category.querySelectorAll('li');
    console.log(`Elements: ${elementOfCategory.length}`);
});
