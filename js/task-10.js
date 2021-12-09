function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  number: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

let amount;

const changeAmount = (event) => {
  const { value } = event.target;
  amount = value;
  console.log(value);
  event.target.reset();
}

let x = 30;
let div;

const createBoxes = amount => {
  for (let i = 1; i <= amount; i += 1) {
    div = document.createElement('div');
    div.style.height = `${x}px`;
    div.style.width = `${x}px`;
    x += 10;
    div.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(div);
  }
}

const destroyBoxes = () => {
  refs.boxes.innerHTML = '';

}

refs.number.addEventListener('input', changeAmount);
refs.createBtn.addEventListener('click', () => { createBoxes(amount) });
refs.destroyBtn.addEventListener('click', destroyBoxes);