const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '12345') {
    alert('Login successful!');
    errorMessage.textContent = '';
  } else {
    errorMessage.textContent = 'Invalid username or password.';
  }
});
