function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorText: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
}

const changeBackgroundColor = () => {
  const randomHexColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomHexColor;
  refs.colorText.textContent = randomHexColor;
}

refs.btn.addEventListener('click', changeBackgroundColor);