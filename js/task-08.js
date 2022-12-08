const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === '' && password.value === '') {
    return alert('Все поля должны быть заполнены.');
  }
  console.log({ email: email.value, password: password.value });
  loginFormRef.reset();
}
