document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const message  = document.getElementById('message');

  if (!email || !password) {
    message.textContent = 'Please fill in all fields.';
    return;
  }
  
});