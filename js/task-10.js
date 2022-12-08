function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('input[type=number]');
const boxesRef = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', () => {
  const amount = inputRef.value;
  if (amount === '') {
    alert('Введи число');
  }
  createBoxes(amount);
});

btnDestroyRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 1, x = 0; i <= amount; i += 1, x += 10) {
    boxesRef.insertAdjacentHTML(
      'beforeend',
      `<div style="background-color: ${getRandomHexColor()}; width: ${30 + x}px; height: ${
        30 + x
      }px"> </div>`,
    );
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
