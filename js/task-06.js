const inputRef = document.querySelector('#validation-input');
const lengthValueInput = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', event => {
  console.log();
  const isValid = event.currentTarget.value.length === lengthValueInput;
  if (isValid) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
    return;
  }
  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');
});
