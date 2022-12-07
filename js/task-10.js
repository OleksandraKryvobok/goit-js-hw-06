function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  create: document.querySelector('[data-create]'),
  destroy: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
  div: document.querySelector('#boxes'),
};

let amount;

refs.input.addEventListener('input', onInputChange);
refs.create.addEventListener('click', () => createBoxes(amount));
refs.destroy.addEventListener('click', onDestroyBtnClick);

function onInputChange(e) {
  amount = e.currentTarget.value;
  console.log(amount);
}

function createBoxes(amount) {
  let x = 30;
  const arrayOfBoxes = [];
  
  for (let i = 1; i <= amount; i += 1) {
    let box = document.createElement('div');
    box.style.width = `${x}px`;
    box.style.height = `${x}px`;
    box.style.backgroundColor = getRandomHexColor();

    arrayOfBoxes.push(box);        
    
    x += 10;
  }

  refs.div.append(...arrayOfBoxes);
}

function onDestroyBtnClick () {
  refs.input.value = '';

  refs.div.innerHTML = '';
}



