const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const createIngredientEl = ingr => {
  return ingredients.map(ingredient => {
    const elementEl = document.createElement('li');
    elementEl.textContent = ingredient;
    elementEl.classList.add('item');
    
    return elementEl;
  });
};

const arrayOfIngredientsEl = createIngredientEl(ingredients);

ingredientsEl.append(...arrayOfIngredientsEl);
console.log(ingredientsEl);



