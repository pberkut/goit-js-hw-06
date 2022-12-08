const inputRef = document.querySelector('#name-input');
const nameValue = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  if (event.currentTarget.value === '') {
    nameValue.textContent = 'Anonymous';
    return;
  }
  nameValue.textContent = event.currentTarget.value;
});
