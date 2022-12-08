const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  const isValid = event.currentTarget.value.length < inputRef.getAttribute('data-length');
  if (isValid) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
    return;
  }
  inputRef.classList.remove('invalid');
  inputRef.classList.add('valid');
});
