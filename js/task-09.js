function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanColorValue = document.querySelector('.color');

btnRef.addEventListener('click', handleBtnChangeColor);

function handleBtnChangeColor(event) {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  spanColorValue.textContent = randomColor;
  console.log(randomColor);
}
