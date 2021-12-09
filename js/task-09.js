function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorText: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
}

const changeBackgroundColor = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorText.textContent = getRandomHexColor();
}

refs.btn.addEventListener('click', changeBackgroundColor);