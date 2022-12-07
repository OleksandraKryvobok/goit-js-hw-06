const refs = {
  bodyEl: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color'),
};


refs.buttonEl.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.spanEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



