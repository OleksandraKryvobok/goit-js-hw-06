// Посчитает и выведет в консоль количество категорий 
// в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента
// (тега < h2 >) и количество элементов в категории
// (всех вложенных в него < li >).
const categoriesEl = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
    const title = category.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const item = category.querySelectorAll('li');
    console.log(`Elements: ${item.length}`);
})

