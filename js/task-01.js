// Посчитает и выведет в консоль количество категорий 
// в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента
// (тега < h2 >) и количество элементов в категории
// (всех вложенных в него < li >).
const categories = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const titleCategory = category.querySelector('h2');
    console.log(`Category: ${titleCategory.textContent}`);
    const item = category.querySelectorAll('li');
    console.log(`Elements: ${item.length}`);
})

